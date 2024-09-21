import styled from "styled-components";
import TeamCard from "../../components/TeamCard";
import DivLine from "./DivLine";
import { RiInformationLine } from "react-icons/ri";
import { GrTextAlignFull } from "react-icons/gr";
import { FiMapPin } from "react-icons/fi";
import { Route, Routes } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { IoEnterOutline } from "react-icons/io5";
import theme from "../../styles/theme";
import User from "../../components/User";
import TextWithIcon from "../../components/TextWithIcon";
import FloatingButton from "../../components/FloatingButton";
import { useEffect, useState } from "react";
import axios from "axios";

const TeamCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
`
const TeamObj = {
    title:"대현동 초보 크루 구해요~🏃‍♂️🏃‍♂️",
    startTime:"2024/09/20 18:00",
    endTime:"2024/09/20 20:00",
    location:"대구광역시 북구 대학로 80",
    people:"2명"
}



const TitleWrapper = styled.h2`
    font-size: ${({theme}) => theme.fontSize.lg};
    padding-left: ${({theme}) => theme.size.xs};
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

const TextWrapper = styled.p`
    font-size: ${({theme}) => theme.fontSize.base};
    padding: 0 ${({theme}) => theme.size.sm};
`
const Text = ({
    children
}) => {
    return(
        <TextWrapper>
            {children}
        </TextWrapper>
    )
}

const TeamPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.size.xs};
    padding: ${({theme}) => theme.size.xs};
`

const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width : fit-content;
    border: none;
    font-size: ${({theme}) => theme.fontSize.base};
    gap: ${({theme}) => theme.size.sm};
    img {
        top: 0;
        border-radius: ${({theme}) => theme.size.md};
        border: 1px solid ${({theme}) => theme.color.black300};
        width: ${({theme}) => theme.size.base};
        height: ${({theme}) => theme.size.base};
        aspect-ratio: 1;
    }
`

const TeamPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left:${({theme}) => theme.size.xxs};  
    gap: ${({theme}) => theme.size.sm};  
    width: 100%;
    flex-shrink : 0;
`


const TeamLeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({theme}) => theme.size.sm};  
    color : ${({theme}) => theme.color.black400};
    padding-left: ${({theme}) => theme.size.xs};
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0 ${({theme}) => theme.size.xs};
    gap: ${({theme}) => theme.size.xs};
    font-size: ${({theme}) => theme.fontSize.sm};
    font-weight: 500;
    color : ${({theme}) => theme.color.black900};
`
const InfoTextWithIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 98%;
    gap: ${({theme}) => theme.size.xxs};
    font-size: ${({theme}) => theme.fontSize.base};
`
const InfoTextWithIcon = ({
    color,
    IconComponent,
    children,
    ...props
}) => {
    return(
        <InfoTextWithIconWrapper {...props}>
            <IconComponent style={{fontSize: theme.size.base, flexShrink: 0}} color={theme.color.black800}/>
            {children}
        </InfoTextWithIconWrapper>
    )
}
const TeamPage = ({
    title,
    user_id,
    user_src,
    startTime,
    endTime,
    location,
    people,
    content

}) => {
    return(
        <TeamPageWrapper>
            <Title>
                {title}
            </Title>
            <TeamLeaderWrapper>
            <TextWithIcon IconComponent={FaCrown}>
                팀장 :
                <UserWrapper>
                    <User 
                        user_src = {user_src}
                        user_id = {user_id}
                    />
                </UserWrapper>
            </TextWithIcon>
            </TeamLeaderWrapper>
            <DivLine {...DivLineInfo} />

            <InfoContainer>
                <InfoTextWithIcon IconComponent={FaRegCalendarAlt}>
                    일정 : {startTime} - {endTime}
                </InfoTextWithIcon>
                <InfoTextWithIcon IconComponent={BiMap}>
                    위치 : {location}
                </InfoTextWithIcon>
                <InfoTextWithIcon IconComponent={IoPeople}>
                    인원 : {people}명
                </InfoTextWithIcon>
            </InfoContainer>

            <DivLine {...DivLineContent} />
            <Text>
                {content}
            </Text>
            <DivLine {...DivLineLocation} />
        </TeamPageWrapper>
    )
}

const TeamPageObj = {
    title : "대현동 초보 크루 구해요~🏃‍♂️🏃‍♂️",
    user_id : "Nadal",
    user_src : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/SV100408.JPG/1200px-SV100408.JPG",
    startTime : "2024/09/20 18:00" ,
    endTime : " 2024/09/20 20:00",
    location : "대구광역시 북구 대학로 80 (IT융복합관 정문앞)",
    people : "3",
    content :"안녕하세요! 함께 대현동에서 건강도 챙기고 환경도 지키는 플로깅을 하실 분들을 모집합니다. 저희는 2024년 9월 20일(금) 오전 10시에 대현동 일대를 돌며 가벼운 러닝과 쓰레기 줍기를 할 예정이에요.✔️ 모집 대상: 플로깅 초보 환영! 러닝 속도는 천천히, 가벼운 마음으로 참여하실 분 ✔️ 일정: 2024년 9월 20일(금) 오전 10시 ✔️ 장소: IT 융복합관 정문 앞✔️ 준비물: 쓰레기 봉투와 장갑은 준비되어 있으니, 편한 복장과 운동화만 챙겨오세요! 자연도 보호하고 운동도 되는 좋은 기회, 같이 해요! 🌍"

}



const DivLineInfo = {
    title : "팀 정보",
    icon : RiInformationLine
}

const DivLineContent = {
    title : "모집 내용",
    icon : CgDetailsMore
}
const DivLineLocation = {
    title : "위치",
    icon : FiMapPin
}

const Team = () => {
    const [TeamList, setTeamList] = useState([]);
    useEffect(() => {
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/team/list"
        })
        .then((response) => {
            setTeamList(response.data.teams);
        })
    },[]);
    return(
        <Routes>
            <Route path="/" element={
            <TeamCardContainer>
                    {
                        TeamList.map((team, index) => {
                            return(
                                <TeamCard {...team} key = {index}/>
                            )
                        })
                    }


                <TeamCard {...TeamObj} />
                <TeamCard {...TeamObj} />
                <TeamCard {...TeamObj} />
                <TeamCard {...TeamObj} />
                <TeamCard {...TeamObj} />
                <TeamCard {...TeamObj} />
                <FloatingButton Icon={IoEnterOutline}>
                    팀 생성하기
                </FloatingButton>
            </TeamCardContainer>
            }/>

            <Route path="/:reviewId" element={
            <TeamPageContainer>
                   <TeamPage {...TeamPageObj} />
            </TeamPageContainer>
            }/>           
        </Routes>
    )
}

export default Team;