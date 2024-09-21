import styled from "styled-components";


const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width : fit-content;
    border: none;
    font-size: ${({theme}) => theme.fontSize.base};
    gap: ${({theme}) => theme.size.xs};
    img {
        top: 0;
        border-radius: ${({theme}) => theme.size.md};
        border: 1px solid ${({theme}) => theme.color.black300};
        width: ${({theme}) => theme.size.md};
        height: ${({theme}) => theme.size.md};
        aspect-ratio: 1;
    }
`

const User = ({
    profile_image,
    user_name
}) => {
    return (
        <UserWrapper>
            <img src ={profile_image}/>
            {user_name}
        </UserWrapper>
    )

}

export default User;