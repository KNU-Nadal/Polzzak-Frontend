import styled from "styled-components";
import EventCard from "../../components/EventCard";
import Title from "../../components/Title";

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


const Event = () => {
    return(
        <>
            <EventContainer>
                <EventCard {...EventObj} />
                <EventCard {...EventObj} />
                <EventCard {...EventObj} />
                <EventCard {...EventObj} />
            </EventContainer>
        </>
    )
}

export default Event;