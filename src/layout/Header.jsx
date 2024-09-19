import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa";
import Frog from "../../frog.svg"
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
`
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.size.xs};
    font-family: 'LOTTERIACHAB';
    font-size: ${({theme}) => theme.fontSize.xl};
    font-weight: 400;
    color: ${({theme}) => theme.color.green400};
    img{
        width: ${({theme}) => theme.size.md};
        height: ${({theme}) => theme.size.md};
    }
`
const Logo = () => {
    return(
        <LogoWrapper>
            <img src={Frog} />
            폴짝
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