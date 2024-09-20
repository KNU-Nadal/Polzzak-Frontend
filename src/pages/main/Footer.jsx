import styled from "styled-components";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import theme from "../../styles/theme";

const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${({theme}) => theme.size.xxs};
    background-color: rgba(177, 177, 177, 0.3);
`

const RightFooter = styled.div`
    color: #4e4e4e;
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: flex-end;
    justify-content: flex-start;
    padding: ${({theme}) => theme.size.xs};
`

const ProjectName = styled.div`
    font-size: ${({theme}) => theme.fontSize.lg};
    font-weight: 800;

`
const Introduction = styled.div`
    font-size: ${({theme}) => theme.fontSize.base};
`
const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-end;
    justify-content: flex-end;
`
const Detail = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({theme}) => theme.size.xs};
    align-items: center;
    font-size: ${({theme}) => theme.fontSize.sm};
    color: ${({theme}) => theme.color.black500};
`

const FooterSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({theme}) => theme.size.xs};
`

const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({theme}) => theme.size.xs};
    font-size: ${({theme}) => theme.fontSize.lg};
    color: ${({theme}) => theme.color.black700};
    a{
        font-size: ${({theme}) => theme.fontSize.base};
        color: ${({theme}) => theme.color.black500};
        font-weight: 300;
        text-decoration: none;
    }
`

const DeveloperWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({theme}) => theme.size.xs};
    font-size: ${({theme}) => theme.fontSize.sm};
    color: ${({theme}) => theme.color.black700};
    img{
        width: ${({theme}) => theme.size.base};
        height: ${({theme}) => theme.size.base};
    }
    a{
        font-size: ${({theme}) => theme.fontSize.sm};
        color: ${({theme}) => theme.color.blue};
    }
`

const Footer = () => {
    return(
        <FooterDiv>
            <FooterSectionWrapper>
                <IconWrapper style={{fontWeight: 600}}>
                    <FaTree style={{fontSize: theme.size.base}} />
                    Team Nadal
                </IconWrapper>
                <IconWrapper>
                    <FaSquareGithub style={{fontSize: theme.size.base}} />
                    <a href='https://github.com/KNU-Nadal'>Github Link</a>
                </IconWrapper>
                Developed By
                <DeveloperWrapper>
                    <img src="https://avatars.githubusercontent.com/u/174276728?s=70&v=4"/>
                    <a href="https://github.com/heydylee">@heydylee</a>
                    - FE
                </DeveloperWrapper>
                <DeveloperWrapper>
                    <img src="https://avatars.githubusercontent.com/u/130034324?s=70&v=4"/>
                    <a href="https://github.com/JEONW00">@JEONW00</a>
                    - BE
                </DeveloperWrapper>
                <DeveloperWrapper>
                    <img src="https://avatars.githubusercontent.com/u/71973291?s=70&v=4"/>
                    <a href="https://github.com/MOJAN3543">@MOJAN3543</a>
                    - FE
                </DeveloperWrapper>
                <DeveloperWrapper>
                    <img src="https://avatars.githubusercontent.com/u/172799476?s=70&v=4"/>
                    <a href="https://github.com/YoonGangHoon">@YoonGangHoon</a>
                    - BE
                </DeveloperWrapper>
            </FooterSectionWrapper>
            <RightFooter>
                <ProjectName>PolZzak</ProjectName>
                <Introduction>환경을 보호하는 산뜻한 움직임</Introduction>
                <DetailContainer>
                    <Detail>2024 대구를 빛내는 해커톤 11팀</Detail>
                    <Detail><IoMailSharp style={{fontSize: theme.fontSize.base}} />wnstjd732@knu.ac.kr</Detail>
                    <Detail>Copyright 2024. 나무 타기의 달인 All rights reserved.</Detail>
                </DetailContainer>
            </RightFooter>
        </FooterDiv>
    )
}

export default Footer