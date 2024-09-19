import styled from "styled-components"
import theme from "../styles/theme";
import { IoMdHome } from "react-icons/io";
import { BiMap } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: col;
    width: 100%;
    padding: ${({theme}) => theme.size.xs} ${({theme}) => theme.size.base};

`

const NavBarIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    gap: ${({theme}) => theme.size.xxs};
    font-size: ${({theme}) => theme.fontSize.sm};
`
const NavBarIcon = ({
    color,
    IconComponent,
    children,
}) => {
    return(
        <NavBarIconWrapper>
            <IconComponent style={{fontSize: theme.size.lg, flexShrink: 0}} color={theme.color.black900}/>
            {children}
        </NavBarIconWrapper>
    )
}

const NavBar = ( ) => {
    return(
        <NavBarWrapper>
                <NavBarIcon IconComponent={IoMdHome}>
                    {"메인 메뉴"}
                </NavBarIcon>
                <NavBarIcon IconComponent={BiMap}>
                    {"지도 보기"}
                </NavBarIcon>
                <NavBarIcon IconComponent={IoPeople}>
                    {"내 플로깅"}
                </NavBarIcon>
                <NavBarIcon IconComponent={LuSettings2}>
                    {"환경설정"}
                </NavBarIcon>
        </NavBarWrapper>
    )
}

export default NavBar;