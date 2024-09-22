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
import MyTeamCard from "../main/MyTeamCard";
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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

const TeamCardContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: ${({theme}) => theme.size.sm};
padding: ${({theme}) => theme.size.sm};
`
const EventRoot = () => {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/event/list/my"
        })
        .then((response) => {
            setEventList(response.data.myevents);
        })
    },[]);

    return(
        <MyEventCardContainer >
                    {
                        eventList.map((event, index) => {
                            return(
                                <EventCard {...myevents} key = {index}/>
                            )
                        })
                    }
        </MyEventCardContainer>
    )
}



const ReviewCardMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({theme}) => theme.size.xxxl};
    gap: ${({theme}) => theme.size.xs};
    flex-shrink: 0;
    border-radius: ${({theme}) => theme.size.xs};
    border: 1px solid ${({theme}) => theme.color.black400};
    overflow: hidden;
    img{
        width: 100%;
        height: ${({theme}) => theme.size.xxl};
        object-fit : cover;
    }
`



const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding: ${({theme}) => theme.size.xs};
    gap: ${({theme}) => theme.size.xs};
    font-size: ${({theme}) => theme.fontSize.sm};
    padding-left: ${({theme}) => theme.size.xs};
    overflow : hidden;
`

const StyledTitle = styled.h2`
    font-size: ${({theme}) => theme.fontSize.base};
    white-space: nowrap; /* 한 줄로 제한 */
    overflow: hidden; /* 넘어간 부분 숨김 */
    text-overflow: ellipsis; /* '...'으로 표시 */
`
const Content = styled.p`
    font-size: ${({theme}) => theme.fontSize.sm};
    white-space: nowrap; /* 한 줄로 제한 */
    overflow: hidden; /* 넘어간 부분 숨김 */
    text-overflow: ellipsis; /* '...'으로 표시 */
`

const Contentddd = styled.p`

    font-size: ${({theme}) => theme.fontSize.sm};
    padding-left: ${({theme}) => theme.size.sm};
    white-space: nowrap; /* 한 줄로 제한 */
    overflow: hidden; /* 넘어간 부분 숨김 */
    text-overflow: ellipsis; /* '...'으로 표시 */
    font-weight: 400;
    color : ${({theme}) => theme.color.black500};
`
const ReviewCardMain = ({
    image_name,
    title,
    content,
    onClick 
}) => {
    
    return(
        <ReviewCardMainWrapper onClick={onClick}>
            <img src={image_name}  />
            <InfoContainer>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <Content>
                    {content}
                </Content>
            </InfoContainer>
        </ReviewCardMainWrapper>
    )
}


const MyPlogging = () => {
  
    return (
        <MainWrapper>
 

            <Title>
                내가 참가하는 플로깅
            </Title>
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


            <Title>
                내가 올린 게시글
            </Title>

            <ReviewCardMainContainer>
                <ReviewCardMain {...
                    {
                        image_name:"https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-blue-sky-and-white-clouds-pure-sky-image_786707.jpg",
                        title:"드디어 찾아온 가을,  신천 플로깅 어때요?",
                        content:"길었던 여름의 뜨거운 열기가 지나가고, 시원한 가을 바람이 불어오고 있네요. 오늘의 후기는 9월 20일에 진행했던 신천 플로깅 후기입니다! 이번 플로깅은 경북대학교..."
                    }
                }/>     
                <ReviewCardMain {...
                    {
                        image_name:"https://src.hidoc.co.kr/image/lib/2021/12/24/1640334383775_0.jpg",
                        title:"플로깅 전 ,준비운동은 필수",
                        content:"즐겁게 운동을 하려면 준비운동은"
                    }
                }/>
                <ReviewCardMain {...
                    {
                        image_name:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdVQCGtuuykTEuMOoDbC48g1_gmCpplrCIQ&s",
                        title:"플린이가 내돈내산한 러닝화 추천",
                        content:"안녕하세요 오늘의 후기는 러닝화 추천입니다."
                    }
                }/>
                                <ReviewCardMain {...
                    {
                        image_name:"https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202007/16/08de36da-fbff-492d-8806-211610773085.jpg",
                        title:"대구 앞산 플로깅코스 추천",
                        content:"혹시 대구의 명소, 앞산을 아시나요?"
                    }
                }/>
            </ReviewCardMainContainer>
            <Title>
                내가 참가하는 이벤트
            </Title>
            <Contentddd>
                현재 참가중인 이벤트가 없습니다
             </Contentddd>
            <EventRoot/>
          
        </MainWrapper>
    )
}

export default MyPlogging;