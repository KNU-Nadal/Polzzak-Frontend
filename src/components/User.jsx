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
    user_src,
    user_id
}) => {
    return (
        <UserWrapper>
            <img src ={user_src}/>
            {user_id}
        </UserWrapper>
    )

}

export default User;