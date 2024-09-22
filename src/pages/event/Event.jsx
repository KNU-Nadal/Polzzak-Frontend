import styled from "styled-components";
import EventCard from "../../components/EventCard";
import { Route, Routes, useParams } from "react-router-dom";
import DivLine from "../team/DivLine";
import { FiMapPin } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import theme from "../../styles/theme";
import { useEffect, useState } from "react";
import axios from "axios";

const EventContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
`


const TextWithIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 98%;
    gap: ${({theme}) => theme.size.sm};
    font-size: ${({theme}) => theme.fontSize.base};
`
const TextWithIcon = ({
    color,
    IconComponent,
    children,
    ...props
}) => {
    return(
        <TextWithIconWrapper {...props}>
            <IconComponent style={{fontSize: theme.size.base, flexShrink: 0}} color={theme.color.black500}/>
            {children}
        </TextWithIconWrapper>
    )
}





const TitleWrapper = styled.h2`
    font-size: ${({theme}) => theme.fontSize.xxl};
    padding: ${({theme}) => theme.size.xs};

`
const Title = ({
    children
}) => {
    return(
        <TitleWrapper>
            {children}
        </TitleWrapper>
    )
}

const EventPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.xs};
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0 ${({theme}) => theme.size.xs};
    gap: ${({theme}) => theme.size.sm};
    font-size: ${({theme}) => theme.fontSize.sm};
    font-weight: 500;
    color : ${({theme}) => theme.color.black900};
`
const DivLineLocation = {
    title : "위치",
    icon : FiMapPin
}

const EventPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left:${({theme}) => theme.size.xxs};  
    gap: ${({theme}) => theme.size.sm};  
    width: 100%;
    flex-shrink : 0;

    img {
        border-radius: ${({theme}) => theme.size.xs};
        top: 0;
        width: auto;
        height: ${({theme}) => theme.size.xxxxl};
        object-fit: contain;
    }
`
const EventPage = ({
    image_name,
    title,
    start_time,
    end_time,
    address,
    member,
    content

}) => {
    return(
        <EventPageWrapper>
            <img src={import.meta.env.VITE_POLZZAK_IMAGE_URL + "/images/" + image_name}/>
            <Title>
                {title}
            </Title>
            <InfoContainer>

            <TextWithIcon IconComponent={FaRegCalendarAlt}>
                    일자 : {start_time ? start_time.split(" ")[0] : '날짜 정보 없음'} ~ {end_time ? end_time.split(" ")[0] : '날짜 정보 없음'}
            </TextWithIcon>

            <TextWithIcon IconComponent={IoMdTime}>
                    시간 : {start_time ? start_time.split(" ")[1] : '시간 정보 없음'} ~ {end_time ? end_time.split(" ")[1] : '시간 정보 없음'}
            </TextWithIcon>

                <TextWithIcon IconComponent={BiMap}>
                    위치 : {address}
                </TextWithIcon>
                
                <TextWithIcon IconComponent={IoPeople}>
                    모집 인원 : {member}명
                </TextWithIcon>
                <TextWithIcon IconComponent={MdMoreHoriz}>
                    기타 : {content}
                </TextWithIcon>
            </InfoContainer>


            <DivLine {...DivLineLocation} />
        </EventPageWrapper>
    )
}



const EventRoot = () => {
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/event/list"
        })
        .then((response) => {
            console.log(response.data.event);
            setEventList(response.data.events);
        })
    },[]);
    return(
        <EventContainer >
                    {
                        eventList.map((event, index) => {
                            return(
                                <EventCard {...event} key = {index}/>
                            )
                        })
                    }
        </EventContainer>
    )
}

const EventIdPage = () => {
    const params = useParams();
    const [event, setEvent] = useState([]);
    useEffect(() => {
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/event",
            params: {
                id: params.eventId
            }
        })
        .then((response) => {
            setEvent(response.data.event);
        })
    },[]);
    return(
        <EventPageContainer>
            <EventPage {...event} />
        </EventPageContainer>
    )
}

const Event = () => {
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/event/list"
        })
        .then((response) => {
            setEventList(response.data.events);
        })
    },[]);
    return(
        <Routes>
            <Route path="/" element={
                <EventRoot/>
            }/>


            <Route path = "/:eventId" element= {
                <EventIdPage/>
            }/>
        </Routes>
    )
}

export default Event;