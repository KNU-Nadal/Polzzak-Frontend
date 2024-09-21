import styled from "styled-components";
import theme from "../styles/theme";

const FloatingButtonWrapper = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: ${({theme}) => theme.size.sm} ${({theme}) => theme.size.md};
    border-radius: ${({theme}) => theme.size.md};
    gap: ${({theme}) => theme.size.sm};
    font-size: ${({theme}) => theme.fontSize.xxl};
    font-weight: 700;
    background-color: ${({theme}) => theme.color.green700};
    color: ${({theme}) => theme.color.bg};
    box-shadow: ${({theme}) => theme.style.shadow};
`

const FloatingButton = ({
    Icon,
    onClick,
    children,
    ...props
}) => {
    return(
        <FloatingButtonWrapper {...props}>
            <Icon style={{fontSize: theme.fontSize.xxxl}}/>
            {children}
        </FloatingButtonWrapper>
    )
}

export default FloatingButton;