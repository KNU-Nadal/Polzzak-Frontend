import styled from "styled-components";

const DDayWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: ${({theme}) => theme.size.base};
    padding: ${({theme}) => theme.size.xxs} ${({theme}) => theme.size.xs};
    background-color: ${({theme}) => theme.color.green600+"50"};
    border-radius: ${({theme}) => theme.size.sm};
    font-size: ${({theme}) => theme.fontSize.sm};
    font-weight: 600;
    line-height: 0px;
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