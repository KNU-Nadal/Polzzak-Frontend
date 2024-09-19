import styled from "styled-components";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";
import theme from "../../styles/theme";

const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${({theme}) => theme.size.xxs};
    background-color: rgba(177, 177, 177, 0.3);
    backdrop-filter: blur(50px);
`

const LeftFooter = styled.div`
    display: flex;
    text-align: left;
    align-items: left;
    justify-content: center;
    flex-direction: column;
`
const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    padding: ${({theme}) => theme.size.sm}; 
    font-size: ${({theme}) => theme.size.lg};
    gap: ${({theme}) => theme.size.sm};
`


const Top = styled.div`
    display: flex;
    align-items: center;
    padding-left: ${({theme}) => theme.size.sm};
    color: #717070;
    font-size: ${({theme}) => theme.fontSize.xxxl};
    font-weight: 800;
`
const GithubLink = styled.div`
    a {
        color:  rgba(0, 0, 0, 0.7);
        text-decoration: none;
    }
    font-size: ${({theme}) => theme.size.md};

`

const RightFooter = styled.div`
    color: #4e4e4e;
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: right;
    justify-content: right;
    padding-right: ${({theme}) => theme.size.sm};
`

const ProjectName = styled.div`
    font-size: ${({theme}) => theme.size.md};
    font-weight: 800;

`
const Introduction = styled.div`
    font-size: ${({theme}) => theme.size.base};
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
            </RightFooter>
        </FooterDiv>
    )
}

export default Footer