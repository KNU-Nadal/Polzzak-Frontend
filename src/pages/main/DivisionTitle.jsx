import styled from "styled-components";


const DivisionTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 ${({theme}) => theme.size.sm};
`
const Comment = styled.h2`
    font-size: ${({theme}) => theme.fontSize.base};
    color : ${({theme}) => theme.color.green700};
`

const Title = styled.h2`
        font-size: ${({theme}) => theme.fontSize.lg};
`

const DivisionTitle = ({
    comment,
    title
}) => {
    return(
        <DivisionTitleWrapper>
            <Comment>
                {comment}
            </Comment>
            <Title>
                {title}
            </Title>
        </DivisionTitleWrapper>
    )
}

export default DivisionTitle;