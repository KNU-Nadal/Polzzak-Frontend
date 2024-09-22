import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeartPin from "../../assets/images/heartPin.svg";
import StarPin from "../../assets/images/starPin.svg";
import TeamPin from "../../assets/images/teamPin.svg";
import MapInfo from "./MapInfo";
import useFooterPopup from "../../hooks/useFooterPopup";
import PopupInfo from "./PopupInfo";
import axios from "axios";

const MapWrapper = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
    height: inherit;

`

const MapComponent = styled.div`
    width: 100%;
    height: inherit;
`

const { kakao } = window;

const createMarkerImage = (src, size) => {
    const ret = new kakao.maps.MarkerImage(src, size);
    return ret;
}

const Blink = styled.div`
    
`

const Map = () => {
    const [map, setMap] = useState(undefined);
    const [reviewList, setReviewList] = useState([]);
    const [FooterPopup, togglePopup] = useFooterPopup();
    const [info, setInfo] = useState({});
    const [componentType, setComponentType] = useState(0); 

    const [eventList, setEventList] = useState([]);
    const [teamList, setTeamList] = useState([]);
    useEffect(() => {
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/event/list"
        })
        .then((response) => {
            setEventList(response.data.events);
        })
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/review/list"
        })
        .then((response) => {
            setReviewList(response.data.reviews);
        })
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/team/list"
        })
        .then((response) => {
            setTeamList(response.data.teams);
        })
    },[]);


    useEffect(() => {
        const mapContainer = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(35.89, 128.61),
            level: 5
        }
        const map = new kakao.maps.Map(mapContainer, options);

        setMap(map);
        
    }, [])

    useEffect(() => {
        reviewList.forEach((ReviewData) => {
            const reviewMarker = new MapInfo(ReviewData, HeartPin, () => {togglePopup(); setInfo(ReviewData); setComponentType(1)});
            reviewMarker.marker.setMap(map);
        })
    }, [reviewList])

    useEffect(() => {
        eventList.forEach((EventData) => {
            const eventMarker = new MapInfo(EventData, StarPin, () => {togglePopup(); setInfo(EventData); setComponentType(2)});
            eventMarker.marker.setMap(map);
        })
    }, [eventList])

    useEffect(() => {
        teamList.forEach((TeamData) => {
            const teamMarker = new MapInfo(TeamData, TeamPin, () => {togglePopup(); setInfo(TeamData); setComponentType(3)});
            teamMarker.marker.setMap(map);
        })
    }, [teamList])

    return(
        <MapWrapper>
            <MapComponent id="map"/>
            <FooterPopup>
                <PopupInfo info={info} PopupType={componentType}/>
            </FooterPopup>
        </MapWrapper>
    )
}

export default Map;