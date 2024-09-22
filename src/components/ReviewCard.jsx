import styled from "styled-components";
import Title from "./Title";
import User from "./User";
import Frog from "../../frog.svg"
import { useNavigate } from 'react-router-dom';

const ReviewCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: ${({theme}) => theme.size.sm};
    border: 1px solid ${({theme}) => theme.color.black400};
    flex-shrink : 0;
    img{
        top: 0;
        width: 100%;
        border-top-left-radius: ${({theme}) => theme.size.sm};
        border-top-right-radius: ${({theme}) => theme.size.sm};
        height: calc(${({theme}) => theme.size.xl} + ${({theme}) => theme.size.xl});
        object-fit : cover;
    }
`
const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width : fit-content;
    border: none;
    font-size: ${({theme}) => theme.fontSize.base};
    gap: ${({theme}) => theme.size.xs};
    padding-top: ${({theme}) => theme.size.xs};
    padding-left: ${({theme}) => theme.size.xs};;
    img {
        top: 0;
        border-radius: ${({theme}) => theme.size.md};
        border: 1px solid ${({theme}) => theme.color.black300};
        width: ${({theme}) => theme.size.md};
        height: ${({theme}) => theme.size.md};
        aspect-ratio: 1;
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({theme}) => theme.size.xs} ${({theme}) => theme.size.sm};
    gap: ${({theme}) => theme.size.xs};
    font-size: ${({theme}) => theme.fontSize.sm};
    padding-left: ${({theme}) => theme.size.xs};
    object-fit: contain;
`
const Content = styled.p`
    font-size: ${({theme}) => theme.fontSize.xs};
    padding-bottom:${({theme}) => theme.size.xs};
    white-space: nowrap; /* 한 줄로 제한 */
    overflow: hidden; /* 넘어간 부분 숨김 */
    text-overflow: ellipsis; /* '...'으로 표시 */
`

const ReviewCard = ({
    image_name,
    profile_image,
    user_name,
    title,
    content,
    onClick

}) => {
    return(
        <ReviewCardWrapper onClick={onClick}>
            <img src={import.meta.env.VITE_POLZZAK_IMAGE_URL + "/images/" + image_name}  />
            <UserWrapper>
            <User 
                profile_image = {profile_image ?? Frog}
                user_name= {user_name}
            />
            </UserWrapper>
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                <Content>
                    {content}
                </Content>
            </InfoContainer>
        </ReviewCardWrapper>
    )
}

export default ReviewCard;