import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa";
import Frog from "../../frog.svg"
import logo from "../assets/images/logo.svg"
import theme from "../styles/theme";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${({theme}) => theme.size.lg};
    border-bottom: 1px solid ${({theme}) => theme.color.black400};
    background-color: ${({theme}) => theme.color.bg};
    width: 100%;
    padding: ${({theme}) => theme.size.md} ${({theme}) => theme.size.base};
    font-size: ${({theme}) => theme.fontSize.xl};
    font-weight: 700;
    z-index: 2;
`
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.size.sm};
    img{
        width: ${({theme}) => theme.size.lg};
        height: ${({theme}) => theme.size.lg};
    }
    img:nth-child(2){
        height: ${({theme}) => theme.fontSize.xxl};
        width: inherit;
    }
`
const Logo = () => {
    return(
        <LogoWrapper>
            <img src={Frog} />
            <img src={logo} />
        </LogoWrapper>
    )
}

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const title = {
        "/map" : "플로깅 맵",
        "/setting" : "환경설정",
        "/review": "플로깅 리뷰",
        "/team": "팀 모집",
        "/event": "플로깅 이벤트",
    }
    return(
        <HeaderWrapper>
            {
                pathname != '/' ?
                    <FaArrowLeft style={{fontSize: theme.fontSize.lg, cursor: "pointer"}} onClick={() => {navigate(-1)}}/>
                :
                    <div style={{width: theme.size.lg}}/>
            }
            {
                pathname == '/' ?
                    <Logo />
                : 
                    <>{title[pathname]}</>
            }
            <div style={{width: theme.size.lg}}/>
        </HeaderWrapper>
    )
}

export default Header;