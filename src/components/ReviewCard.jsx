import styled from "styled-components";
import Title from "./Title";
import User from "./User";

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
    src,
    user_src,
    user_id,
    title,
    content

}) => {
    return(
        <ReviewCardWrapper>
            <img src={src}/>
            <UserWrapper>
            <User {...
            {
                user_src:"https://cdn2.colley.kr/colley_content_paragraph_14_145_160030797214320.jpg",
                user_id: "Heydy"
            }
            }/>
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