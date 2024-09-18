import styled from "styled-components"
import theme from "../styles/theme";
import { IoMdHome } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: col;
    width: 100%;
    border: 1px solid ${({theme}) => theme.color.black500};
    padding: ${({theme}) => theme.size.xs} ${({theme}) => theme.size.base};

`

const FooterIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    gap: ${({theme}) => theme.size.xxs};
    font-size: ${({theme}) => theme.fontSize.sm};
`
const FooterIcon = ({
    color,
    IconComponent,
    children,
}) => {
    return(
        <FooterIconWrapper>
            <IconComponent style={{fontSize: theme.size.lg, flexShrink: 0}} color={theme.color.black900}/>
            {children}
        </FooterIconWrapper>
    )
}

const Footer = ( ) => {
    return(
        <FooterWrapper>
                <FooterIcon IconComponent={IoMdHome}>
                    {"메인 메뉴"}
                </FooterIcon>
                <FooterIcon IconComponent={BiMap}>
                    {"지도 보기"}
                </FooterIcon>
                <FooterIcon IconComponent={IoPeople}>
                    {"내 플로깅"}
                </FooterIcon>
                <FooterIcon IconComponent={LuSettings2}>
                    {"환경설정"}
                </FooterIcon>
        </FooterWrapper>
    )
}

export default Footer;