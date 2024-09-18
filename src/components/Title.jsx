import styled from "styled-components"

const TitleWrapper = styled.h2`
    font-size: ${({theme}) => theme.fontSize.lg};
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

export default Title;