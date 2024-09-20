import styled from "styled-components";
import Title from "../../components/Title";
import TeamCard from "../../components/TeamCard";
import DivLine from "./DivLine";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GrTextAlignFull } from "react-icons/gr";
import { FiMapPin } from "react-icons/fi";

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

const DivLineInfo = {
    title : "팀 정보",
    icon : IoMdInformationCircleOutline
}

const DivLineContent = {
    title : "모집 내용",
    icon : GrTextAlignFull
}
const DivLineLocation = {
    title : "위치",
    icon : FiMapPin
}

const Team = () => {
    return(
        <TeamCardContainer>
            <DivLine {...DivLineInfo} />
            <DivLine {...DivLineContent} />
            <DivLine {...DivLineLocation} />
            <TeamCard {...TeamObj} />
            <TeamCard {...TeamObj} />
            <TeamCard {...TeamObj} />
            <TeamCard {...TeamObj} />
            <TeamCard {...TeamObj} />
            <TeamCard {...TeamObj} />
        </TeamCardContainer>
        
    )
}

export default Team;