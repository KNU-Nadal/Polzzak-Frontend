import styled from "styled-components";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    &:nth-child(1){
        background-color: ${({theme}) => theme.color.bg};
    }
`

const Layout = ({children}) => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    return(
        <LayoutWrapper>
            {!isLoginPage && <Header />}
                {children}
            {!isLoginPage && <NavBar />}
        </LayoutWrapper>
    )
}

export default Layout