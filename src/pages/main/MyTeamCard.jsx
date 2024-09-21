import styled from "styled-components";
import Title from "../../components/Title";


const MyTeamCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: ${({theme}) => theme.size.xs};
    padding-left: ${({theme}) => theme.size.sm};
    border-radius: ${({theme}) => theme.size.xs};
    border: 1px solid ${({theme}) => theme.color.black400};
    box-shadow: ${({theme}) => theme.style.shadow};

`
const User = ({
    user_src
}) => {
    return (
        <UserWrapper>
            <img src ={user_src}/>
        </UserWrapper>
    )

}
const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width : fit-content;
    border: none;
    justify-content: center;
    font-size: ${({theme}) => theme.fontSize.base};
    gap: ${({theme}) => theme.size.xs};

    img {
        top: 0;
        border-radius: ${({theme}) => theme.size.md};
        border: 1px solid ${({theme}) => theme.color.black300};
        width: ${({theme}) => theme.size.lg};
        height: ${({theme}) => theme.size.lg};
        aspect-ratio: 1;
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({theme}) => theme.size.xs};
    gap: ${({theme}) => theme.size.xs};
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({theme}) => theme.size.xs};
`

const MyTeamCard = ({
    user_src,
    title,
    startTime,
    location,

}) => {
    return(
        <MyTeamCardWrapper>
            <UserWrapper>
                <User user_src={user_src} />
            </UserWrapper>
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                <Content>
                    <div>{startTime}</div>
                    •
                    <div>{location}</div>
                </Content>
            </InfoContainer>
        </MyTeamCardWrapper>
    )
}

export default MyTeamCard;