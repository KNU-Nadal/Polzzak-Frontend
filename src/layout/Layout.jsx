import styled from "styled-components";

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    &:nth-child(1){
        background-color: ${({theme}) => theme.color.bg};
    }
`

const Layout = ({children}) => {
    return(
        <LayoutWrapper>
            <div />
            {children}
            <div />
        </LayoutWrapper>
    )
}

export default Layout