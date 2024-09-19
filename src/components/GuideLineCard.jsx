import styled from "styled-components";
import Title from "./Title";
import TextWithIcon from "./TextWithIcon";
import { IoIosArrowForward } from "react-icons/io";

const GuideLineCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({theme}) => theme.size.xxxl};
    border-radius: ${({theme}) => theme.size.xs};
    border: 1px solid ${({theme}) => theme.color.black400};
    box-shadow: ${({theme}) => theme.style.shadow};
    padding: ${({theme}) => theme.size.xxs};
    overflow: hidden;
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
    font-size: ${({theme}) => theme.fontSize.sm};
`


const GuideLineCard = ({
    title,
    content,

}) => {
    return(
        <GuideLineCardWrapper>
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                    {content}
                <TextWithIcon IconComponent={IoIosArrowForward}>
                    {"더보기"}
                </TextWithIcon>
            </InfoContainer>
        </GuideLineCardWrapper>
    )
}

export default GuideLineCard;