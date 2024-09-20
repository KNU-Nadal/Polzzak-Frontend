import styled from "styled-components"
import theme from "../../styles/theme"
import { IoMdInformationCircleOutline } from "react-icons/io";

const DivLineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;

`

const TextWithIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 98%;
    gap: ${({theme}) => theme.size.xxs};
    font-weight: 600;
    font-size: ${({theme}) => theme.fontSize.base};
`
const TextWithIcon = ({
    color,
    IconComponent,
    children,
    ...props
}) => {
    return(
        <TextWithIconWrapper {...props}>
            <IconComponent style={{fontSize: theme.size.base, flexShrink: 0}} />
            {children}
        </TextWithIconWrapper>
    )
}
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: ${({theme}) => theme.size.xs};
    gap: ${({theme}) => theme.size.xs};
    font-size: ${({theme}) => theme.fontSize.sm};
`

const Line = styled.div`
    flex-grow: 1;
    height: 1px;
    border-top: 2px solid ${({theme}) => theme.color.black900};
`

const DivLine  = ({
    title,
    icon
}) => {
    return(
        <DivLineWrapper>
            <InfoContainer>
                <TextWithIcon IconComponent={icon}>
                    {title}
                </TextWithIcon>  
                
            </InfoContainer>
            <Line/>
        </DivLineWrapper>
    )
}

export default DivLine;