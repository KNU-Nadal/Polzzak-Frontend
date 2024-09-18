import styled from "styled-components";

const DDayWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: ${({theme}) => theme.size.sm};
    background-color: ${({theme}) => theme.color.green600+"50"};
    border-radius: ${({theme}) => theme.size.sm};
    font-size: ${({theme}) => theme.fontSize.sm};
    font-weight: 600;
    line-height: 2px;
    margin-bottom: ${({theme}) => theme.size.xxs};
    color: ${({theme}) => theme.color.green600};
`

const DDay = ({
    DDay
}) => {
    return (
        <DDayWrapper>
            D-{DDay == 0 ? "DAY" : DDay}
        </DDayWrapper>
    )
}

export default DDay;