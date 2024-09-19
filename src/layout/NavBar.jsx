import styled from "styled-components"
import theme from "../styles/theme";
import { RiHome2Line } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

const NavBarWrapper = styled.div`
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${({theme}) => theme.color.black400};
    background-color: ${({theme}) => theme.color.bg};
    width: 100%;
    padding: ${({theme}) => theme.size.sm} ${({theme}) => theme.size.md};
`

const NavBarIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme}) => theme.size.xxs};
    font-size: ${({theme}) => theme.fontSize.sm};
    font-weight: ${(props) => props.isSelected ? 700: 400};
    color: ${(props) => props.isSelected ? ({theme}) => theme.color.primary : ({theme}) => theme.color.black900};
    cursor: ${(props) => props.isSelected ? "default" : "pointer"};
`
const NavBarIcon = ({
    isSelected,
    IconComponent,
    children,
    path,
}) => {
    const navigate = useNavigate();
    return(
        <NavBarIconWrapper isSelected={isSelected} onClick={() => {isSelected ? null : navigate(path)}}>
            <IconComponent style={{fontSize: theme.size.lg, flexShrink: 0}} color={isSelected ? theme.color.primary : theme.color.black900}/>
            {children}
        </NavBarIconWrapper>
    )
}

const NavBar = ( ) => {
    const { pathname } = useLocation();
    const ButtonInfoList = [
        {
            icon: RiHome2Line,
            path: "/",
            string: "메인 메뉴"
        },
        {
            icon: GrLocation,
            path: "/map",
            string: "지도 보기"
        },
        {
            icon: FaRegUser,
            path: "/myplogging",
            string: "내 플로깅"
        },
        {
            icon: LuSettings2,
            path: "/setting",
            string: "환경설정"
        }
    ]
    return(
        <NavBarWrapper>
            {
                ButtonInfoList.map((ButtonInfo) => {
                    return(
                        <NavBarIcon isSelected={ButtonInfo.path == pathname} IconComponent={ButtonInfo.icon} path={ButtonInfo.path}>
                            {ButtonInfo.string}
                        </NavBarIcon>
                    )
                })
            }
        </NavBarWrapper>
    )
}

export default NavBar;