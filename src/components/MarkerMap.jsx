import { useEffect, useLayoutEffect, useRef } from "react"
import styled from "styled-components";
import MapInfo from "../pages/map/MapInfo";
import FrogPin from "../assets/images/frogPin.svg";

const MapContainer = styled.div`
    width: 100%;
    height: calc(${({theme}) => theme.size.xxxl} + ${({theme}) => theme.size.xl});
`
/**
 * 
 * @param {lat}  마커를 표시할 위도
 * @param {lng} 마커를 표시할 경도
 */
const MarkerMap = ({
    lat,
    lng,
    onClick
}) => {
    const mapRef = useRef();


    useEffect(() => {
        const mapComponent = mapRef.current;
        const options = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 3
        }
        const map = new kakao.maps.Map(mapComponent, options);
    
        const mapInfo = new MapInfo({lat:lat, lng:lng}, FrogPin, onClick);
    
        mapInfo.marker.setMap(map);
    })

    return <MapContainer ref={mapRef} />
}

export default MarkerMap;