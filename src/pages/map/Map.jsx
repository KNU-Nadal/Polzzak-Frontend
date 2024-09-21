import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HeartPin from "../../assets/images/heartPin.svg";
import StarPin from "../../assets/images/starPin.svg";
import MapInfo from "./MapInfo";
import useFooterPopup from "../../hooks/useFooterPopup";
import PopupInfo from "./PopupInfo";

const MapWrapper = styled.div`
    flex-grow: 1;
    position: relative;
    display: flex;
`

const MapComponent = styled.div`
    width: 100%;
    /* height: 100px; */
`

const { kakao } = window;

const ReviewDataList = [
    {
        "review": {
          "id": 1,
          "title": "경북대학교 플로깅 후기",
          "content": "오늘 경북대학교에서 친구들과 함께 플로깅을 했습니다. 캠퍼스 안의 쓰레기를 줍는 시간이었지만, 모두가 즐겁게 참여하며 환경을 보호하는 의미 있는 활동이었습니다. 청소 후 깨끗해진 캠퍼스를 보니 뿌듯했고, 이후 커피 한잔하면서 플로깅에 대해 이야기 나눴습니다.",
          "user_name": "전창우",
          "address": "대구광역시 북구 대학로 80",
          "place_name": "경북대학교",
          "lat": 35.8906,
          "lng": 128.6121,
          "image_name": "http://172.20.37.33:8080/images/292ca7eb-228c-4226-a0b2-2d0b55cfd461.png"
        }
    },
    {
        "review": {
          "id": 2,
          "title": "신천 둔치 플로깅 후기",
          "content": "신천 둔치에서 오늘 아침 플로깅을 진행했습니다. 시원한 바람을 맞으며 하천 주변을 걸으며 쓰레기를 줍는 활동을 했어요. 많은 사람들이 운동하러 나와 있었는데, 우리의 활동에 관심을 가지는 분들이 많아서 뿌듯했습니다. 다음에도 또 하고 싶어요!̆̈",
          "user_name": "김혜진",
          "address": "대구광역시 중구 동성로 23",
          "place_name": "신천 둔치",
          "lat": 35.8693,
          "lng": 128.6036,
          "image_name": "http://172.20.37.33:8080/images/292ca7eb-228c-4226-a0b2-2d0b55cfd461.png"
        }
      },
      {
        "review": {
          "id": 3,
          "title": "달성공원 플로깅 후기",
          "content": "오늘은 대구 달성공원에서 플로깅을 했습니다. 공원 내 동물원을 지나가면서 많은 쓰레기를 주웠고, 동물들을 구경하는 것도 즐거웠습니다. 공원이 더 깨끗해져서 기분이 좋았고, 함께한 친구들과 즐거운 추억을 만들었어요.",
          "user_name": "박영수",
          "address": "대구광역시 중구 달성공원로 35",
          "place_name": "달성공원",
          "lat": 35.8689,
          "lng": 128.5816,
          "image_name": "http://172.20.37.33:8080/images/292ca7eb-228c-4226-a0b2-2d0b55cfd461.png"
        }
      }
];

const EventDataList = [
    {
  "event": {
    "id": 1,
    "title": "대구 동성로 골목 상권 살리기 플로깅",
    "content": "대구의 중심 상권인 동성로에서 골목 상권을 되살리기 위한 플로깅 행사입니다. 시민들과 함께 환경을 보호하며 상권을 활성화하는 의미 있는 시간을 보내세요.\n봉사 시간: 8시간\n\n코스소개\n1. 동성로 대구백화점 앞\n2. 향촌문화관\n3. 약전골목",
    "start_time": "2024-10-01T10:00:00",
    "end_time": "2024-10-01T18:00:00",
    "address": "대구광역시 중구 동성로2가",
    "place_name": "동성로",
    "lat": 35.8696,
    "lng": 128.5959,
    "image_name": "http://172.20.37.33:8080/images/292ca7eb-228c-4226-a0b2-2d0b55cfd461.png"
  }
},
{
  "event": {
    "id": 2,
    "title": "팔공산 자연보호 플로깅 행사",
    "content": "대구의 명소 팔공산에서 자연을 보호하는 플로깅을 진행합니다. 자연 속에서 환경을 지키는 봉사활동을 체험해보세요.\n봉사 시간: 6시간\n\n코스소개\n1. 동화사 입구\n2. 팔공산 케이블카 하단역",
    "start_time": "2024-10-07T09:00:00",
    "end_time": "2024-10-07T15:00:00",
    "address": "대구광역시 동구 팔공산로 185",
    "place_name": "팔공산",
    "lat": 35.9910,
    "lng": 128.6850,
    "image_name": "http://172.20.37.33:8080/images/292ca7eb-228c-4226-a0b2-2d0b55cfd461.png"
}
},
{
  "event": {
    "id": 3,
    "title": "안지랑 곱창골목 플로깅",
    "content": "대구의 유명한 안지랑 곱창골목에서 진행되는 플로깅 행사입니다. 맛있는 곱창과 함께 깨끗한 거리를 만들어봐요.\n봉사 시간: 5시간\n\n코스소개\n1. 안지랑역 출구\n2. 곱창 타운 메인 거리",
    "start_time": "2024-09-30T11:00:00",
    "end_time": "2024-09-30T16:00:00",
    "address": "대구광역시 남구 대명로36길 76",
    "place_name": "안지랑 곱창골목",
    "lat": 35.8466,
    "lng": 128.5729,
    "image_name": "http://172.20.37.33:8080/images/292ca7eb-228c-4226-a0b2-2d0b55cfd461.png"
  }
},
{
  "event": {
    "id": 4,
    "title": "수성못 환경 정화 플로깅",
    "content": "대구의 아름다운 수성못에서 진행되는 환경 정화 플로깅입니다. 가족과 함께 참여할 수 있는 편안한 코스입니다.\n봉사 시간: 4시간\n\n코스소개\n1. 수성못 둘레길\n2. 수성못 중앙 광장",
    "start_time": "2024-10-03T08:00:00",
    "end_time": "2024-10-03T12:00:00",
    "address": "대구광역시 수성구 두산동 512",
    "place_name": "수성못",
    "lat": 35.8350,
    "lng": 128.6178,
    "image_name": "http://172.20.37.33:8080/images/292ca7eb-228c-4226-a0b2-2d0b55cfd461.png"
  }
},
{
  "event": {
    "id": 5,
    "title": "대구 올드타운 역사 탐방 플로깅",
    "content": "대구의 역사적인 장소를 탐방하며 동시에 거리를 깨끗이 하는 플로깅 행사입니다. 대구의 과거와 현재를 연결하는 의미 있는 시간을 보내세요.\n봉사 시간: 7시간\n\n코스소개\n1. 서문시장\n2. 계산성당",
    "start_time": "2024-10-05T09:00:00",
    "end_time": "2024-10-05T16:00:00",
    "address": "대구광역시 중구 서문로2가",
    "place_name": "서문시장",
    "lat": 35.8703,
    "lng": 128.591,
    "image_name": "http://172.20.37.33:8080/images/292ca7eb-228c-4226-a0b2-2d0b55cfd461.png"
  }
}
];

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


    useEffect(() => {
        const mapContainer = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(35.89, 128.61),
            level: 5
        }
        const map = new kakao.maps.Map(mapContainer, options);

        setMap(map);
        
        ReviewDataList.forEach((ReviewData) => {
            const reviewMarker = new MapInfo(ReviewData.review, HeartPin, () => {togglePopup(); setInfo(ReviewData.review); setComponentType(1)});
            reviewMarker.marker.setMap(map);
        });

        EventDataList.forEach((EventData) => {
            const eventMarker = new MapInfo(EventData.event, StarPin, () => {togglePopup(); setInfo(EventData.event); setComponentType(2)});
            eventMarker.marker.setMap(map);
        })

        setInfo(ReviewDataList[0])
    }, [])

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