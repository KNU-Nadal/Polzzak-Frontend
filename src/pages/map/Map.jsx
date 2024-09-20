import PopUp from "./PopUp";

const PopUpObj = {
    src:"https://cc-prod.scene7.com/is/image/CCProdAuthor/Photography%20Page%20JDI_marquee_tb?$pjpeg$&jpegSize=300&wid=1536",
    title:"카페 나달",
    location:"대구광역시 북구 대학로 80",
    date: "2024/09/20 18:00 - 2024/09/20 20:00" 
}

const Map = () => {
    return(
            <PopUp {...PopUpObj} />
    )
}

export default Map;