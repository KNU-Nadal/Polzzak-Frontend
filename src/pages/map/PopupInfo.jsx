import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";


const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({theme}) => theme.size.xs};
    gap: ${({theme}) => theme.size.xs};  
    font-size: ${({theme}) => theme.fontSize.sm};
    padding-left: ${({theme}) => theme.size.xs};
    object-fit: contain;
    /* width: 100%; */
    width: calc(95% - ${({theme}) => theme.size.xxl});
`

const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSize.lg};
    white-space: nowrap;
    overflow: hidden; /* 넘어간 부분 숨김 */
    text-overflow: ellipsis; /* '...'으로 표시 */
`

const Content = styled.p`
    font-size: ${({theme}) => theme.fontSize.base};
    
    white-space: nowrap;
    overflow: hidden; /* 넘어간 부분 숨김 */
    text-overflow: ellipsis; /* '...'으로 표시 */
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
    flex-shrink: 0;
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


const PopupInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const InfoTypeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({theme}) => theme.size.xxs};
    font-size: ${({theme}) => theme.fontSize.xs};
    font-weight: 700;
    color: ${(props) => props.color};
    background-color: ${(props) => props.color + "30"};
    padding: ${({theme}) => theme.size.xs};
    border-radius: ${({theme}) => theme.size.xs};
    flex-shrink: 0;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.size.sm};
`

const PopupInfo = ({info, PopupType}) => {
    switch(PopupType){
        case 1:
            return <ReviewPopupInfo {...info} />
        case 2:
            return <EventPopupInfo {...info} />
        case 3:
            return <TeamPopupInfo {...info} />
        default:
            return <></>
    }
}

const ReviewPopupInfo = ({
    id,
    title,
    content,
    address,
    place_name,
    image_name,
    ...props
}) => {
    const navigate = useNavigate()
    return (
        <PopupInfoContainer {...props}>
            <InfoContainer>
                <TitleContainer style={{cursor: "pointer"}} onClick={() => {navigate("/review/" + id)}}>
                    <InfoTypeWrapper color="#FB2A2A">
                        <FaHeart />
                        리뷰
                    </InfoTypeWrapper>
                    <Title>
                        {title}
                    </Title>
                </TitleContainer>
                
                <Content>
                    {content}
                </Content>
                <TextWithIcon IconComponent={FaMapMarkerAlt}>
                    {`${address} (${place_name})`}
                </TextWithIcon>             
            </InfoContainer>
            <ImgContainer>
                <img src={import.meta.env.VITE_POLZZAK_IMAGE_URL + "/images/" + image_name}/>
            </ImgContainer>
        </PopupInfoContainer>
    )
}

const EventPopupInfo = ({
    id,
    title,
    start_time,
    end_time,
    address,
    place_name,
    image_name,
    ...props
}) => {
    const navigate = useNavigate()
    return (
        <PopupInfoContainer {...props}>
            <InfoContainer>
                <TitleContainer style={{cursor: "pointer"}} onClick={() => {navigate("/event/" + id)}}>
                    <InfoTypeWrapper color="#FFD42B">
                        <FaStar />
                        이벤트
                    </InfoTypeWrapper>
                    <Title>
                        {title}
                    </Title>
                </TitleContainer>
                <TextWithIcon IconComponent={IoCalendarClear}>
                    {`${start_time.split(' ')[0]} - ${end_time.split(' ')[0]}`}
                </TextWithIcon>
                <TextWithIcon IconComponent={IoTime}>
                    {`${start_time.split(' ')[1].substring(0, 5)} - ${end_time.split(' ')[1].substring(0, 5)}`}
                </TextWithIcon>
                <TextWithIcon IconComponent={FaMapMarkerAlt}>
                    {`${address} (${place_name})`}
                </TextWithIcon>             
            </InfoContainer>
            <ImgContainer>
                <img src={import.meta.env.VITE_POLZZAK_IMAGE_URL + "/images/" + image_name}/>
            </ImgContainer>
        </PopupInfoContainer>
    )
}

const TeamPopupInfo = ({
    id,
    title,
    content,
    address,
    place_name,
    image_name,
    ...props
}) => {
    const navigate = useNavigate()
    return (
        <PopupInfoContainer {...props}>
            <InfoContainer>
                <TitleContainer style={{cursor: "pointer"}} onClick={() => {navigate("/team/" + id)}}>
                    <InfoTypeWrapper color="#3B56FF">
                        <HiUserGroup />
                        팀 모집
                    </InfoTypeWrapper>
                    <Title>
                        {title}
                    </Title>
                </TitleContainer>
                
                <Content>
                    {content}
                </Content>
                <TextWithIcon IconComponent={FaMapMarkerAlt}>
                    {`${address} (${place_name})`}
                </TextWithIcon>             
            </InfoContainer>
            <ImgContainer>
                <img src={import.meta.env.VITE_POLZZAK_IMAGE_URL + "/images/" + image_name}/>
            </ImgContainer>
        </PopupInfoContainer>
    )
}

export default PopupInfo