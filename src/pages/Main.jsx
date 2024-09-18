import styled from "styled-components";
import Title from "../components/Title";
import TextWithIcon from "../components/TextWithIcon";
import { AiFillAccountBook } from "react-icons/ai";
import EventCard from "../components/EventCard";

const MainWrapper = styled.div`
    
`

const Main = () => {
    return (
        <MainWrapper>
            <Title>
                타이틀
            </Title>
            <TextWithIcon IconComponent={AiFillAccountBook}>
                안녕하세요
            </TextWithIcon>
            <EventCard {...
                {
                    src:"https://cdn.welfarehello.com/naver-blog/production/buk_daegu/2024-09/223582886882/buk_daegu_223582886882_1.png",
                    title:"금호강 바람소리길 축제",
                    startTime:"09.28",
                    endTime:"09.29",
                    location:"금호강 산격대교 하단일원(산격야영장)"
                }
            }/>
        </MainWrapper>
    )
}

export default Main;