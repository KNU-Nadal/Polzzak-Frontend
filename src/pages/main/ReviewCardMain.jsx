import styled from "styled-components";
import Title from "../../components/Title";
import { useNavigate } from 'react-router-dom';

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
    font-size: ${({theme}) => theme.fontSize.xs};
    white-space: nowrap; /* 한 줄로 제한 */
    overflow: hidden; /* 넘어간 부분 숨김 */
    text-overflow: ellipsis; /* '...'으로 표시 */
`
const ReviewCardMain = ({
    image_name,
    title,
    content,
    onClick 
}) => {
    
    return(
        <ReviewCardMainWrapper onClick={onClick}>
            <img src={import.meta.env.VITE_POLZZAK_IMAGE_URL + "/images/" + image_name}  />
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

export default ReviewCardMain;