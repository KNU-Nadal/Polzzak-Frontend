import styled, { css } from "styled-components";
import SadFrog from "../../assets/images/sadFrog.svg"
import text from "../../assets/images/404text.svg"
import { FaArrowLeft } from "react-icons/fa";
import theme from "../../styles/theme";
import Frog from "../../../frog.svg"
import { useNavigate } from "react-router-dom";
const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.base};
    font-size: ${({theme}) => theme.fontSize.lg};
    font-weight: 500;
`
const ErrorLogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({theme}) => theme.size.sm};
    img:first-child{
        height: ${({theme}) => theme.size.xl};
    }
    img:last-child{
        height: ${({theme}) => theme.size.xl};
    }
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({theme}) => theme.size.sm};
`
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({theme}) => theme.size.sm};
    gap: ${({theme}) => theme.size.sm};
    border: 3px solid;
    border-radius: ${({theme}) => theme.size.sm};
    font-size: ${({theme}) => theme.fontSize.lg};
    font-weight: 600;
    cursor: pointer;
    ${(props) => props.isprimary ?
    css`
        color: ${({theme}) => theme.color.green500};
        border-color: ${({theme}) => theme.color.green500};
    `
    :
    css`
        color: ${({theme}) => theme.color.black500};
        border-color: ${({theme}) => theme.color.black500};
    `}
`
const NotFound = () => {
    const navigate = useNavigate();
    return(
        <NotFoundWrapper>
            <ErrorLogoWrapper>
                <img src={SadFrog}/>
                <img src={text}/>
            </ErrorLogoWrapper>
            페이지 주소가 잘못되었거나, 사용할 수 없는 페이지입니다. 현재 주소를 다시 한 번 확인해주세요.
            <ButtonContainer>
                <ButtonWrapper onClick={() => {navigate(-1)}}>
                    <FaArrowLeft style={{fontSize: theme.fontSize.lg}} />
                    이전 페이지
                </ButtonWrapper>
                <ButtonWrapper isprimary="true" onClick={() => {navigate("/")}}>
                    <img style={{height: theme.fontSize.lg, width: theme.fontSize.lg}} src={Frog}/>
                    메인 메뉴
                </ButtonWrapper>
            </ButtonContainer>
        </NotFoundWrapper>
    )
}

export default NotFound;