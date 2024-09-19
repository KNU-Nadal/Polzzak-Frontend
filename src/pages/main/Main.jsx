import styled from "styled-components";
import Title from "../../components/Title";
import TextWithIcon from "../../components/TextWithIcon";
import { AiFillAccountBook } from "react-icons/ai";
import EventCard from "../../components/EventCard";
import TeamCard from "../../components/TeamCard";
import User from "../../components/User";
import ReviewCard from "../../components/ReviewCard";
import NavBar from "../../layout/NavBar";
import GuideLineCard from "../../components/GuideLineCard";
import Footer from "../main/Footer";
import DivisionTitle from "./DivisionTitle";
import ReviewCardMain from "./ReviewCardMain";
import MyTeamCard from "./MyTeamCard";

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
const GuideLineCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x : auto;
    flex-wrap: nowrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
    &::-webkit-scrollbar {
        display: none;
    }
`
const ReviewCardMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x : auto;
    flex-wrap: nowrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
    &::-webkit-scrollbar {
        display: none;
    }
`
const MyTeamCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
`
const Main = () => {
    return (
        <MainWrapper>
            <Title>
            오늘도 깨끗한 지구로 폴짝!
            </Title>

            <GuideLineCardContainer>
                <GuideLineCard {...
                    {
                        title: "플로깅 팀원 모집",
                        content:"다른사람들과 함께 플로깅을 해보세요"
                    }
                }/>
                <GuideLineCard {...
                    {
                        title: "플로깅 루트 리뷰",
                        content:"사람들의 손이 거쳐진 깨끗한 길을 알아봐요"
                    }
                }/>
                <GuideLineCard {...
                    {
                        title: "플로깅 팀원 모집",
                        content:"다른사람들과 함께 플로깅을 해보세요"
                    }
                }/>
                <GuideLineCard {...
                    {
                        title: "플로깅 팀원 모집",
                        content:"다른사람들과 함께 플로깅을 해보세요"
                    }
                }/>
            </GuideLineCardContainer>

            <DivisionTitle {...
                {
                    comment: "실시간 인기 상승",
                    title : "회원님들의 플로깅 루트 리뷰"
                }
            }/>

            <ReviewCardMainContainer>
                <ReviewCardMain {...
                    {
                        src:"https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-blue-sky-and-white-clouds-pure-sky-image_786707.jpg",
                        title:"드디어 찾아온 가을,  신천 플로깅 어때요?",
                        content:"길었던 여름의 뜨거운 열기가 지나가고, 시원한 가을 바람이 불어오고 있네요. 오늘의 후기는 9월 20일에 진행했던 신천 플로깅 후기입니다! 이번 플로깅은 경북대학교..."
                    }
                }/>     
                <ReviewCardMain {...
                    {
                        src:"https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-blue-sky-and-white-clouds-pure-sky-image_786707.jpg",
                        title:"드디어 찾아온 가을,  신천 플로깅 어때요?",
                        content:"길었던 여름의 뜨거운 열기가 지나가고, 시원한 가을 바람이 불어오고 있네요. 오늘의 후기는 9월 20일에 진행했던 신천 플로깅 후기입니다! 이번 플로깅은 경북대학교..."
                    }
                }/>
                <ReviewCardMain {...
                    {
                        src:"https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-blue-sky-and-white-clouds-pure-sky-image_786707.jpg",
                        title:"드디어 찾아온 가을,  신천 플로깅 어때요?",
                        content:"길었던 여름의 뜨거운 열기가 지나가고, 시원한 가을 바람이 불어오고 있네요. 오늘의 후기는 9월 20일에 진행했던 신천 플로깅 후기입니다! 이번 플로깅은 경북대학교..."
                    }
                }/>
            </ReviewCardMainContainer>
            <DivisionTitle {...
                {
                    comment: "잊지 마세요!",
                    title : "내가 등록한 플로깅"
                }
            }/>
            <MyTeamCardContainer>
            <MyTeamCard {...
                {
                    user_src:"https://velog.velcdn.com/images/0912078/post/11d186c1-58d3-4461-9709-4d0bb2914536/image.jpg",
                    title: "신천 플로깅 (중,고수 환영)🙋‍♂️",
                    startTime: "9월 18일 20시",
                    location: "대현동 부근"
                }
            }/>
            <MyTeamCard {...
                {
                    user_src:"https://velog.velcdn.com/images/0912078/post/11d186c1-58d3-4461-9709-4d0bb2914536/image.jpg",
                    title: "신천 플로깅 (중,고수 환영)🙋‍♂️",
                    startTime: "9월 18일 20시",
                    location: "대현동 부근"
                }
            }/>
            </MyTeamCardContainer>

            <DivisionTitle {...
                {
                    comment: "우리 동네 플로깅 소식",
                    title : "홍보•모집 게시판"
                }
            }/>

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

                <Footer/>
        </MainWrapper>
    )
}

export default Main;