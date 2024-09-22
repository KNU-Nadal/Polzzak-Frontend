import styled from "styled-components";
import Title from "./Title";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import DDay from "./DDay";
import theme from "../styles/theme";

const EventCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(50% - ${({theme}) => theme.size.xs});
    border-radius: ${({theme}) => theme.size.xs};
    border: 1px solid ${({theme}) => theme.color.black500};
    overflow: hidden;
    box-shadow: ${({theme}) => theme.style.shadow};
    flex-shrink: 0;
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
const TextWithIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 98%;
    gap: ${({theme}) => theme.size.xxs};
    font-size: ${({theme}) => theme.fontSize.sm};
`
const TextWithIcon = ({
    color,
    IconComponent,
    children,
    ...props
}) => {
    return(
        <TextWithIconWrapper {...props}>
            <IconComponent style={{fontSize: theme.size.base, flexShrink: 0}} color={theme.color.black500}/>
            {children}
        </TextWithIconWrapper>
    )
}


const EventCard = ({
    image_name,
    title,
    start_time,
    end_time,
    address,
    onClick
}) => {
    return(
        <EventCardWrapper onClick={onClick}>
            <img src={import.meta.env.VITE_POLZZAK_IMAGE_URL + "/images/" +image_name}/>
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                <DDay DDay={1}/>

                    <TextWithIcon IconComponent={FaRegCalendarAlt}>
                        {start_time.split(" ")[0]}~{end_time.split(" ")[0]}
                    </TextWithIcon>
                    <TextWithIcon IconComponent={BiMap}>
                        {address}
                    </TextWithIcon>
      
            </InfoContainer>
        </EventCardWrapper>
    )
}

export default EventCard;