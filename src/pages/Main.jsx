import styled from "styled-components";
import Title from "../components/Title";
import TextWithIcon from "../components/TextWithIcon";
import { AiFillAccountBook } from "react-icons/ai";
import EventCard from "../components/EventCard";
import TeamCard from "../components/TeamCard";
import User from "../components/User";
import ReviewCard from "../components/ReviewCard";
import Footer from "../layout/Footer";

const MainWrapper = styled.div`
    
`
const EventCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
`
    

const TeamCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
`
const ReviewCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
`

const Main = () => {
    return (
        <MainWrapper>
            <Footer></Footer>
            <Title>
                타이틀
            </Title>
            <TextWithIcon IconComponent={AiFillAccountBook}>
                안녕하세요
            </TextWithIcon>
            <ReviewCardContainer>
                <ReviewCard {...
                    {
                        src:"https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-blue-sky-and-white-clouds-pure-sky-image_786707.jpg",
                        user_src:"https://cdn2.colley.kr/colley_content_paragraph_14_145_160030797214320.jpg",
                        user_id: "Heydy",
                        title:"드디어 찾아온 가을,  신천 플로깅 어때요?",
                        content:"길었던 여름의 뜨거운 열기가 지나가고, 시원한 가을 바람이 불어오고 있네요. 오늘의 후기는 9월 20일에 진행했던 신천 플로깅 후기입니다! 이번 플로깅은 경북대학교..."
                    }
                }/>
            </ReviewCardContainer>
            <ReviewCardContainer>
                <ReviewCard {...
                    {
                        src:"https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-blue-sky-and-white-clouds-pure-sky-image_786707.jpg",
                        user_src:"https://cdn2.colley.kr/colley_content_paragraph_14_145_160030797214320.jpg",
                        user_id: "Heydy",
                        title:"드디어 찾아온 가을,  신천 플로깅 어때요?",
                        content:"길었던 여름의 뜨거운 열기가 지나가고, 시원한 가을 바람이 불어오고 있네요. 오늘의 후기는 9월 20일에 진행했던 신천 플로깅 후기입니다! 이번 플로깅은 경북대학교..."
                    }
                }/>
            </ReviewCardContainer>
 
            <EventCardContainer>
                <EventCard {...
                    {
                        src:"https://cdn.welfarehello.com/naver-blog/production/buk_daegu/2024-09/223582886882/buk_daegu_223582886882_1.png",
                        title:"금호강 바람소리길 축제",
                        startTime:"09.28",
                        endTime:"09.29",
                        location:"금호강 산격대교 하단일원(산격야영장)"
                    }
                }/>
                <EventCard {...
                    {
                        src:"https://cdn.welfarehello.com/naver-blog/production/buk_daegu/2024-09/223582886882/buk_daegu_223582886882_1.png",
                        title:"금호강 바람소리길 축제",
                        startTime:"09.28",
                        endTime:"09.29",
                        location:"금호강 산격대교 하단일원(산격야영장)"
                    }
                }/>
                <EventCard {...
                    {
                        src:"https://cdn.welfarehello.com/naver-blog/production/buk_daegu/2024-09/223582886882/buk_daegu_223582886882_1.png",
                        title:"금호강 바람소리길 축제",
                        startTime:"09.28",
                        endTime:"09.29",
                        location:"금호강 산격대교 하단일원(산격야영장)"
                    }
                }/>
                <EventCard {...
                    {
                        src:"https://cdn.welfarehello.com/naver-blog/production/buk_daegu/2024-09/223582886882/buk_daegu_223582886882_1.png",
                        title:"금호강 바람소리길 축제",
                        startTime:"09.28",
                        endTime:"09.29",
                        location:"금호강 산격대교 하단일원(산격야영장)"
                    }
                }/>

            </EventCardContainer>

            <TeamCardContainer>
                <TeamCard {...
                {
                    title:"대현동 초보 크루 구해요~🏃‍♂️🏃‍♂️",
                    startTime:"2024/09/20 18:00",
                    endTime:"2024/09/20 20:00",
                    location:"대구광역시 북구 대학로 80",
                    people:"2명"
                }
                }/>
                                <TeamCard {...
                {
                    title:"대현동 초보 크루 구해요~🏃‍♂️🏃‍♂️",
                    startTime:"2024/09/20 18:00",
                    endTime:"2024/09/20 20:00",
                    location:"대구광역시 북구 대학로 80",
                    people:"2명"
                }
                }/>
            </TeamCardContainer>


        </MainWrapper>
    )
}

export default Main;