import styled from "styled-components";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";

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
    color: #717070;
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

const Footer = () => {
    return(
        <FooterDiv>
            <LeftFooter>
                <Top>
                    <FaTree /> <label>Team Nadal</label>
                </Top>  

                <FooterContainer>
                    <FaSquareGithub /> 
                        <GithubLink>        
                            <a href = 'https://github.com/KNU-Nadal'>github </a>
                        </GithubLink>   
                </FooterContainer>
            </LeftFooter>

            <RightFooter>
                <ProjectName>PolZzak</ProjectName>
                <Introduction>환경을 보호하는 산뜻한 움직임</Introduction>
            </RightFooter>
        </FooterDiv>
    )
}

export default Footer