import styled from "styled-components"
import MapInfo from "../pages/map/MapInfo";
import FrogPin from "../assets/images/frogPin.svg"
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MapContainer = styled.div`
    width: calc(${({theme}) => theme.size.xxxl} + ${({theme}) => theme.size.xxxl});
    height: calc(${({theme}) => theme.size.xxxl} + ${({theme}) => theme.size.xl});
`
const StyledInput = styled.input`
    font-family: 'Noto Sans KR';
    padding: ${({theme}) => theme.size.base} 0;
    height: ${({theme}) => theme.size.base};
    font-size: ${({theme}) => theme.size.base};
    border: none;
    border-bottom: 2px solid ${({theme}) => theme.color.black500};
    font-weight: 500;
    &:focus{
        outline: none;
    }
`

const usePlaceInput = () => {
    const mapRef = useRef();

    const [placeInfo, setPlaceInfo] = useState({
        lat: 35.89,
        lng: 128.6121,
        address: "",
        name: ""
    });

    useLayoutEffect(() => {
        const mapComponent = mapRef.current;
        const options = {
            center: new kakao.maps.LatLng(placeInfo.lat, placeInfo.lng),
            level: 4
        }
        const map = new kakao.maps.Map(mapComponent, options);
    
        const centerInfo = new MapInfo({...placeInfo}, FrogPin);

        centerInfo.marker.setMap(map);

        const geocoder = new kakao.maps.services.Geocoder();

        kakao.maps.event.addListener(map, 'drag', () => {
            const centerPosition = map.getCenter();

            const Place = {
                lat: centerPosition.Ma,
                lng: centerPosition.La,
            }

            const latlng = new kakao.maps.LatLng(Place.lat, Place.lng)

            centerInfo.marker.setPosition(latlng);

            
        })

        kakao.maps.event.addListener(map, 'dragend', () => {
            const centerPosition = map.getCenter();
            const Place = {
                lat: centerPosition.Ma,
                lng: centerPosition.La,
            }

            const latlng = new kakao.maps.LatLng(Place.lat, Place.lng)

            

            geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (res, stat) => {
                setPlaceInfo({...placeInfo, address: res[0].address.address_name,lat: Place.lat, lng: Place.lng})
            })

            centerInfo.marker.setPosition(latlng);
        })
    })

    const mapComponent = () => {
        return(
            <>
                <MapContainer ref={mapRef} />
                <StyledInput type="text" readOnly value={placeInfo.address}/>
                <StyledInput type="text" placeholder="상세 주소를 입력하세요" defaultValue={placeInfo.name} onBlur={(e) => {console.log(e.target.value);setPlaceInfo({...placeInfo, name: e.target.value})}}/>
            </>
        )
    }

    return [mapComponent, placeInfo]

}

export default usePlaceInput