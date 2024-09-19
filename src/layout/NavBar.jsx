import styled from "styled-components"
import theme from "../styles/theme";
import { RiHome2Line } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
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
                <NavBarIcon IconComponent={RiHome2Line}>
                    {"메인 메뉴"}
                </NavBarIcon>
                <NavBarIcon IconComponent={GrLocation}>
                    {"지도 보기"}
                </NavBarIcon>
                <NavBarIcon IconComponent={FaRegUser}>
                    {"내 플로깅"}
                </NavBarIcon>
                <NavBarIcon IconComponent={LuSettings2}>
                    {"환경설정"}
                </NavBarIcon>
        </NavBarWrapper>
    )
}

export default NavBar;