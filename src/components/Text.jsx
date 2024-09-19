import styled from "styled-components"

const TextWrapper = styled.p`
    font-size: ${({theme}) => theme.fontSize.base};
`
const Text = ({
    children
}) => {
    return(
        <TextWrapper>
            {children}
        </TextWrapper>
    )
}

export default Text;