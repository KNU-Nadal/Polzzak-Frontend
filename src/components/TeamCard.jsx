import styled from "styled-components";
import Title from "./Title";
import TextWithIcon from "./TextWithIcon";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";

const TeamCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: ${({theme}) => theme.size.xs};
    border: 1px solid ${({theme}) => theme.color.black400};
    overflow: hidden;
    box-shadow: ${({theme}) => theme.style.lightShadow};

    img{
        top: 0;
        width: 100%;
        aspect-ratio: 1;
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({theme}) => theme.size.xs};
    gap: ${({theme}) => theme.size.xs};
`


const TeamCard = ({
    title,
    startTime,
    endTime,
    location,
    people

}) => {
    return(
        <TeamCardWrapper>
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                <TextWithIcon IconComponent={FaRegCalendarAlt}>
                    {startTime} - {endTime}
                </TextWithIcon>
                <TextWithIcon IconComponent={BiMap}>
                    {location}
                </TextWithIcon>
                <TextWithIcon IconComponent={IoPeople}>
                    {people}
                </TextWithIcon>
            </InfoContainer>
        </TeamCardWrapper>
    )
}

export default TeamCard;