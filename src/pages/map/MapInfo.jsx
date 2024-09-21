const createMarkerImage = (src, size) => {
    const ret = new kakao.maps.MarkerImage(src, size);
    return ret;
}

class MapInfo {
    constructor(props, markerImage, onClick){
        this.marker = markerImage ? 
        new kakao.maps.Marker({
            position: new kakao.maps.LatLng(props.lat, props.lng),
            image: createMarkerImage(markerImage, new kakao.maps.Size(48, 48))
        }) :
        new kakao.maps.Marker({
            position: new kakao.maps.LatLng(props.lat, props.lng),
        })
        if(onClick)
            kakao.maps.event.addListener(this.marker, 'click', onClick);
    }
}

export default MapInfo;