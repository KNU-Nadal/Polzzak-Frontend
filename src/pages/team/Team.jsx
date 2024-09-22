import styled from "styled-components";
import TeamCard from "../../components/TeamCard";
import DivLine from "./DivLine";
import { RiInformationLine } from "react-icons/ri";
import { GrTextAlignFull } from "react-icons/gr";
import { FiMapPin } from "react-icons/fi";
import { Route, Routes,  useParams} from "react-router-dom";
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
import { CiMap } from "react-icons/ci";
import MarkerMap from "../../components/MarkerMap"
import Frog from "../../../frog.svg"
import { useNavigate } from 'react-router-dom';

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


const TeamCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
`

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
    admin_id,
    profile_image,
    start_time,
    end_time,
    place_name,
    address,
    member,
    content,
    lat,
    lng,

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
                        profile_image = {profile_image ?? Frog}
                        user_name = {admin_id}
                    />
                </UserWrapper>
            </TextWithIcon>
            </TeamLeaderWrapper>
            <DivLine {...DivLineInfo} />

            <InfoContainer>
                <InfoTextWithIcon IconComponent={FaRegCalendarAlt}>
                    일정 : {start_time} - {end_time}
                </InfoTextWithIcon>
                <InfoTextWithIcon IconComponent={CiMap}>
                    위치 : {place_name}
                </InfoTextWithIcon>
                <InfoTextWithIcon IconComponent={BiMap}>
                    상세 위치 : {address}
                </InfoTextWithIcon>
                <InfoTextWithIcon IconComponent={IoPeople}>
                    인원 : {member}명
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


const TeamIdPage = () => {
    const params = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/team",
            params: {
                id: params.teamId
            }
        })
        .then((response) => {
            console.log(response.data);
            setTeam(response.data);
        })
    },[]);
    return(
        <TeamPageContainer>
            <TeamPage {...team.team} />
        </TeamPageContainer>
    )
}

const Team = () => {
    const [TeamList, setTeamList] = useState([]);
    const navigate = useNavigate();
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
                                <TeamCard {...team} 
                                key = {index}
                                onClick= {() => navigate('/team/' + team.id)}
                                />
                            )
                        })
                    }
                <FloatingButton Icon={IoEnterOutline}>
                    팀 생성하기
                </FloatingButton>
            </TeamCardContainer>
            }/>

            <Route path="/:teamId" element={
                <TeamIdPage />
            }/>           
        </Routes>
    )
}

export default Team;