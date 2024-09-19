import styled from "styled-components";
import NavBar from "./NavBar";
import Header from "./Header";

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
            <Header />
            {children}
            <NavBar />
        </LayoutWrapper>
    )
}

export default Layout