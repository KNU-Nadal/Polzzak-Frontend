import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";
import theme from "../../styles/theme";



const PopUpWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top-left-radius: ${({theme}) => theme.size.xs};
    border-top-right-radius: ${({theme}) => theme.size.xs};
    border: 1px solid ${({theme}) => theme.color.black400};
    padding: ${({theme}) => theme.size.sm};
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({theme}) => theme.size.xs};
    gap: ${({theme}) => theme.size.xs};  
    font-size: ${({theme}) => theme.fontSize.sm};
    padding-left: ${({theme}) => theme.size.xs};
    object-fit: contain;
`

const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSize.lg};
`
const TextWithIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 98%;
    align-items: center;
    gap: ${({theme}) => theme.size.xxs};
    font-size: ${({theme}) => theme.fontSize.xs};
    color: ${({theme}) => theme.color.black500};
`
const TextWithIcon = ({
    color,
    IconComponent,
    children,
    ...props
}) => {
    return(
        <TextWithIconWrapper {...props}>
            <IconComponent style={{fontSize: theme.size.base, flexShrink: 0}} color={theme.color.primary}/>
            {children}
        </TextWithIconWrapper>
    )
}
const ImgContainer = styled.div`
    display: flex;
    justify-content: center;

    width: ${({theme}) => theme.size.xxl};
    height: calc(${({theme}) => theme.size.md} + ${({theme}) => theme.size.xl});/* 원하는 너비 */
    overflow: hidden;  /* 이미지가 컨테이너를 넘어가면 숨김 */
    border-radius: ${({theme}) => theme.size.xs};  /* 선택적으로 둥근 테두리 */
    img {
        width: 100%;  /* 컨테이너 너비에 맞추기 */
        height: 100%;  /* 컨테이너 높이에 맞추기 */
        object-fit: cover;  /* 이미지 비율을 유지하며 컨테이너에 맞추기 */
    }
`

const PopUp  = ({
    src,
    title,
    location,
    date

}) => {
    return(
        <PopUpWrapper>
            <InfoContainer>
                <Title>
                    {title}
                </Title>
                <TextWithIcon IconComponent={FaMapMarkerAlt}>
                    {location}
                </TextWithIcon>
                <TextWithIcon IconComponent={IoCalendarClear}>
                    {date}
                </TextWithIcon>                
            </InfoContainer>
            <ImgContainer>
                <img src={src}/>
            </ImgContainer>
        </PopUpWrapper>
    )
}

export default PopUp;