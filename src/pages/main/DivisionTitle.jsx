import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import theme from "../../styles/theme";

const DivisionTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 ${({theme}) => theme.size.sm};
    margin-top: ${({theme}) => theme.size.sm};
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
`

const Comment = styled.h2`
    font-size: ${({theme}) => theme.fontSize.base};
    color : ${({theme}) => theme.color.green700};
`

const Title = styled.h2`
        font-size: ${({theme}) => theme.fontSize.lg};
`

const TextWithIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 98%;
    gap: ${({theme}) => theme.size.xxs};
    font-size: ${({theme}) => theme.fontSize.sm};
    cursor: pointer;
`
const TextWithIcon = ({
    color,
    IconComponent,
    children,
    ...props
}) => {
    return(
        <TextWithIconWrapper {...props}>
            <IconComponent style={{fontSize: theme.fontSize.sm, flexShrink: 0}} color={theme.color.black500}/>
            {children}
        </TextWithIconWrapper>
    )
}


const DivisionTitle = ({
    comment,
    title,
    ...props
}) => {
    return(
        <DivisionTitleWrapper>
            <Text>
                <Comment>
                    {comment}
                </Comment>
                <Title>
                    {title}
                </Title>

            </Text>
            <TextWithIcon onClick={() => {props.onClick()}} style={{color: theme.color.black500}} IconComponent={IoIosArrowForward}>
                    더보기
            </TextWithIcon>
        </DivisionTitleWrapper>
    )
}

export default DivisionTitle;