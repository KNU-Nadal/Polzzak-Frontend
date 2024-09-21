import styled from "styled-components";
import TextWithIcon from "../../components/TextWithIcon";
import { AiFillAccountBook } from "react-icons/ai";
import EventCard from "../../components/EventCard";
import TeamCard from "../../components/TeamCard";
import User from "../../components/User";
import ReviewCard from "../../components/ReviewCard";
import NavBar from "../../layout/NavBar";
import GuideLineCard from "../../components/GuideLineCard";
import Footer from "../main/Footer";
import ReviewCardMain from "../main/ReviewCardMain";
import MyTeamCard from "../main/MyTeamCard";


const MainWrapper = styled.div`
    
`

const TitleWrapper = styled.h2`
    font-size: ${({theme}) => theme.fontSize.xl};
    padding: ${({theme}) => theme.size.sm};
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




const MyEventCardContainer = styled.div`
    display: flex;
    height: calc(${({theme}) => theme.size.xxxxl} + ${({theme}) => theme.size.xl});

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
    height: ${({theme}) => theme.size.xxxxl};
    overflow-y : scroll;
  
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





const MyPlogging = () => {
    return (
        <MainWrapper>
            <Title>
                내가 등록한 이벤트
            </Title>
            <MyEventCardContainer>
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

            </MyEventCardContainer>

            <Title>
                내가 등록한 플로깅
            </Title>
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

            <Title>
                내가 올린 게시글
            </Title>

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

          
        </MainWrapper>
    )
}

export default MyPlogging;