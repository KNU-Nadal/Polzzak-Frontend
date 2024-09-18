import styled from "styled-components";
import Title from "./Title";
import TextWithIcon from "./TextWithIcon";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import DDay from "./DDay";

const EventCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - ${({theme}) => theme.size.xs});
    border-radius: ${({theme}) => theme.size.xs};
    border: 1px solid ${({theme}) => theme.color.black500};
    overflow: hidden;
    box-shadow: ${({theme}) => theme.style.shadow};
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


const EventCard = ({
    src,
    title,
    startTime,
    endTime,
    location,
}) => {
    return(
        <EventCardWrapper>
            <img src={src}/>
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                <DDay DDay={1}/>
                <TextWithIcon IconComponent={FaRegCalendarAlt}>
                    {startTime} - {endTime}
                </TextWithIcon>
                <TextWithIcon IconComponent={BiMap}>
                    {location}
                </TextWithIcon>
            </InfoContainer>
        </EventCardWrapper>
    )
}

export default EventCard;