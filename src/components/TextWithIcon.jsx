import styled from "styled-components"
import theme from "../styles/theme";

const TextWithIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({theme}) => theme.size.xxs};
    font-size: ${({theme}) => theme.fontSize.base};
`
const TextWithIcon = ({
    color,
    IconComponent,
    children,
}) => {
    return(
        <TextWithIconWrapper>
            <IconComponent style={{fontSize: theme.size.base, flexShrink: 0}} color={theme.color.black500}/>
            {children}
        </TextWithIconWrapper>
    )
}

export default TextWithIcon;