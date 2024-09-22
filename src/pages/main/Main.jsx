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
import DivisionTitle from "./DivisionTitle";
import ReviewCardMain from "./ReviewCardMain";
import MyTeamCard from "./MyTeamCard";
import theme from "../../styles/theme";
import { useNavigate } from 'react-router-dom';
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MainWrapper = styled.div`
    flex-grow: 1;
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

const TitleWrapper = styled.h2`
    font-size: ${({theme}) => theme.fontSize.lg};
    padding: ${({theme}) => theme.size.sm};
    padding-bottom: 0;
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

const ReviewRoot = () => {
    const [reviewList, setReviewList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/review/list"
        })
        .then((response) => {
            setReviewList(response.data.reviews);
        })
    },[]);
    return(
        <ReviewCardMainContainer>
                    {
                        
                        reviewList.map((review, index) => {
                            return(
                                <ReviewCardMain 
                                {...review} 
                                key = {index}
                                onClick= {() => navigate('/review/' + review.id)}
                                />
                            )
                        })
                    }
        </ReviewCardMainContainer>
    )
}
const EventContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    width: ${({theme}) => theme.size.xxxl};
    height: ${({theme}) => theme.size.xxxl};
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
    img{

        object-fit : cover;
    }
`

const EventRoot = () => {
    const [eventList, setEventList] = useState([]);
    const navigate = useNavigate();
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
        <ReviewCardMainContainer>
                    {
                        eventList.map((event, index) => {
                            return(
                                <EventCard {...event}
                                 key = {index}
                                 onClick= {() => navigate('/event/' + event.id)}
                                 />
                            )
                        })
                    }
        </ReviewCardMainContainer>
    )
}

const Main = () => {
    const navigate = useNavigate();
    return (
        <MainWrapper>
            <Title>
            오늘도 깨끗한 지구로 폴짝!
            </Title>

            <GuideLineCardContainer>
                <GuideLineCard {...
                    {
                        title: "플로깅 팀원 모집",
                        content:"다른사람들과 함께 플로깅을 해보세요",
                        onClick: () => {navigate("/team")}
                    }
                }/>
                <GuideLineCard {...
                    {
                        title: "플로깅 루트 리뷰",
                        content:"사람들의 손이 거쳐진 깨끗한 길을 알아봐요",
                        onClick: () => {navigate("/review")}
                    }
                }/>
                <GuideLineCard {...
                    {
                        title: "도와주세요!",
                        content:"도움이 필요한 거리를 깨끗하게 해봐요",
                        onClick: () => {navigate("/event")}
                    }
                }/>
            </GuideLineCardContainer>

            <DivisionTitle {...
                {
                    comment: "실시간 인기 상승",
                    title : "회원님들의 플로깅 루트 리뷰",
                    onClick: () => {navigate("/review")}
                }
            }/>
 

            <ReviewCardMainContainer>

                         <ReviewRoot />

              
            </ReviewCardMainContainer>
            <DivisionTitle {...
                {
                    comment: "잊지 마세요!",
                    title : "내가 등록한 플로깅",
                    onClick: () => {navigate("/myplogging")}
                }
            }/>
            <MyTeamCardContainer>
            <MyTeamCard {...
                {
                    user_src:"https://velog.velcdn.com/images/0912078/post/11d186c1-58d3-4461-9709-4d0bb2914536/image.jpg",
                    title: "신천 플로깅 (중,고수 환영)🙋‍♂️",
                    startTime: "9월 24일 20시",
                    location: "대현동 부근"
                }
            }/>
            <MyTeamCard {...
                {
                    user_src:"https://www.knu.ac.kr/wbbs/img/intro/new_ch_basic.png",
                    title: "경북대학교 플로깅 크루 JU-U-RA 🙆‍♀️🙆‍♂️♻",
                    startTime: "9월 28일 19시",      
                    location: "복현동 부근"
                }
            }/>
            </MyTeamCardContainer>

            <DivisionTitle {...
                {
                    comment: "우리 동네 플로깅 소식",
                    title : "홍보•모집 게시판",
                    onClick: () => {navigate("/event")}
                }
            }/>

            <ReviewCardMainContainer>

                    <EventRoot />

            </ReviewCardMainContainer>
                <Footer/>
        </MainWrapper>
    )
}

export default Main;