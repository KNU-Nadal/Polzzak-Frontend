import styled, { css } from "styled-components"
import pz from "../../assets/images/pz.svg"
import Frog from "../../../frog.svg"
import theme from "../../styles/theme"
import kakaotalk from "../../assets/images/KakaoTalkIcon.svg"
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.base};
    font-size: ${({theme}) => theme.fontSize.lg};
    font-weight: 500;
`

const FrogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: ${({theme}) => theme.size.sm};
    img:first-child{
        height: ${({theme}) => theme.size.xl};
    }
    img:last-child{
        height: ${({theme}) => theme.size.lg};
    }
`

const TitleWrapper = styled.h2`
    font-size: ${({theme}) => theme.fontSize.base};
    font-weight: 400;
    color : ${({theme}) => theme.color.black900};
`
const Title = ({
    children
}) => {
    return(
        <TitleWrapper>
            {children}
        </TitleWrapper>
    )
}

const ButtonContainer= styled.div`
    padding-top: ${({theme}) => theme.fontSize.xl};;
`
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: ${({theme}) => theme.size.sm} ${({theme}) => theme.size.base};
    gap: ${({theme}) => theme.size.sm};
    border-radius: ${({theme}) => theme.size.sm};
    font-size: ${({theme}) => theme.fontSize.lg};
    font-weight: 800;
    cursor: pointer;
    color: ${({theme}) => theme.color.kakaoBrown};
    background-color: ${({theme}) => theme.color.kakaoYellow};

`
const Login = () => {
    Kakao.init(import.meta.env.VITE_KAKAO_LOGIN_API_KEY);
    function loginWithKakao() {
        Kakao.Auth.authorize({
          redirectUri: "http://polzzak-api.mojan.site/user",
        });
      }

    return(
        <LoginWrapper>
                <FrogWrapper>
                    <img src={Frog}/>
                    <img src={pz}/>                
                </FrogWrapper>
                <Title>
                환경을 보호하는 산뜻한 움직임
                </Title>
                <ButtonContainer>
                    <ButtonWrapper isprimary="true" onClick={() => {loginWithKakao()}}>
                        <img style={{height: theme.fontSize.xxxl, width: theme.fontSize.xxxl}} src={kakaotalk}/>
                        카카오톡으로 로그인
                    </ButtonWrapper>
                </ButtonContainer>
        </LoginWrapper>

        
    )

}

export default Login;