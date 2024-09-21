import styled from "styled-components";
import Title from "./Title";
import TextWithIcon from "./TextWithIcon";
import { IoIosArrowForward } from "react-icons/io";
import theme from "../styles/theme";

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

const TextWithIconStyled = styled(TextWithIcon)`
  cursor: pointer;
`;

const GuideLineCard = ({
    title,
    content,
    ...props
}) => {
    return(
        <GuideLineCardWrapper>
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                    {content}
                <TextWithIconStyled onClick={() => {props.onClick()}} style={{color: theme.color.black500}} IconComponent={IoIosArrowForward} >
                    더보기
                </TextWithIconStyled>
            </InfoContainer>
        </GuideLineCardWrapper>
    )
}

export default GuideLineCard;