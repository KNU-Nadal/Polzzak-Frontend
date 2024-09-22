import styled from "styled-components";
import theme from "../styles/theme";

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: ${({theme}) => theme.size.sm} ${({theme}) => theme.size.md};
    border-radius: ${({theme}) => theme.size.md};
    gap: ${({theme}) => theme.size.sm};
    width: 100%;
    font-size: ${({theme}) => theme.fontSize.xxl};
    font-weight: 700;
    background-color: ${({theme}) => theme.color.green700};
    color: ${({theme}) => theme.color.bg};
    box-shadow: ${({theme}) => theme.style.shadow};
    cursor: pointer;
`

const Button = ({
    Icon,
    onClick,
    children,
    ...props
}) => {
    return(
        <ButtonWrapper onClick={onClick} {...props}>
            <Icon style={{fontSize: theme.fontSize.xxxl}}/>
            {children}
        </ButtonWrapper>
    )
}

export default Button;