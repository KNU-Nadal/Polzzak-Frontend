import styled from "styled-components";
import EventCard from "../../components/EventCard";
import { Route, Routes } from "react-router-dom";
import DivLine from "../team/DivLine";
import { FiMapPin } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import theme from "../../styles/theme";

const EventContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
`

const EventObj = {
    src:"https://cdn.welfarehello.com/naver-blog/production/buk_daegu/2024-09/223582886882/buk_daegu_223582886882_1.png",
    title:"금호강 바람소리길 축제",
    startTime:"09.28",
    endTime:"09.29",
    location:"금호강 산격대교 하단일원(산격야영장)"
}

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
    src,
    title,
    startDate,
    endDate,
    startTime,
    endTime,
    location,
    people,
    content

}) => {
    return(
        <EventPageWrapper>
            <img src={src}/>

            <Title>
                {title}
            </Title>

            <InfoContainer>
                <TextWithIcon IconComponent={FaRegCalendarAlt}>
                    일자 : {startDate} ~ {endDate}
                </TextWithIcon>
                <TextWithIcon IconComponent={IoMdTime}>
                    시간 : {startTime} ~ {endTime}
                </TextWithIcon>
                <TextWithIcon IconComponent={BiMap}>
                    위치 : {location}
                </TextWithIcon>
                <TextWithIcon IconComponent={IoPeople}>
                    모집 인원 : {people}명
                </TextWithIcon>
                <TextWithIcon IconComponent={MdMoreHoriz}>
                    기타 : {content}
                </TextWithIcon>
            </InfoContainer>


            <DivLine {...DivLineLocation} />
        </EventPageWrapper>
    )
}
const EventPageObj = {
    src:"https://cdn.welfarehello.com/naver-blog/production/buk_daegu/2024-09/223582886882/buk_daegu_223582886882_1.png",
    title : "금호강 바람소리길 축제",
    startDate: "9.28(토)",
    endDate : "9.29(일)",    
    startTime : "09:00",
    endTime : "22:00",
    location : "대구광역시 북구 산격동 1477-1 (산격야영장)",
    people : "100",
    content : "봉사시간 26시간 인정, 폴짝이 굿즈 증정"
}


const Event = () => {
    return(
        <Routes>
            <Route path="/" element={
            <EventContainer>
                <EventCard {...EventObj} />
                <EventCard {...EventObj} />
                <EventCard {...EventObj} />
                <EventCard {...EventObj} />
            </EventContainer>
            }/>


            <Route path = "/:reviewId" element= {
                <EventPageContainer>
                <EventPage {...EventPageObj} />
                </EventPageContainer>
            }/>
        </Routes>
    )
}

export default Event;