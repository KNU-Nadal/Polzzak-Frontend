import styled from "styled-components";
import Title from "../../components/Title";
import Text from "../../components/Text";
import ReviewCard from "../../components/ReviewCard";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const ReviewCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
`
const ReviewObj = {
    src:"https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-blue-sky-and-white-clouds-pure-sky-image_786707.jpg",
    user_src:"https://cdn2.colley.kr/colley_content_paragraph_14_145_160030797214320.jpg",
    user_id: "Heydy",
    title:"드디어 찾아온 가을,  신천 플로깅 어때요?",
    content:"길었던 여름의 뜨거운 열기가 지나가고, 시원한 가을 바람이 불어오고 있네요. 오늘의 후기는 9월 20일에 진행했던 신천 플로깅 후기입니다! 이번 플로깅은 경북대학교..."
}


const ReviewPageContainer = styled.div`
    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.sm};
    padding: ${({theme}) => theme.size.sm};
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({theme}) => theme.size.xxs} ${({theme}) => theme.size.xxs} ${({theme}) => theme.size.sm} ${({theme}) => theme.size.xxs};
    gap: ${({theme}) => theme.size.xs};
    font-size: ${({theme}) => theme.fontSize.sm};
    color : ${({theme}) => theme.color.black400};
`
const ReviewPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;


    flex-shrink : 0;
    img{
        border-radius: ${({theme}) => theme.size.xs};
        top: 0;
        width: 100%;
        margin-bottom: ${({theme}) => theme.size.base};;
        height: calc(${({theme}) => theme.size.xxl} + ${({theme}) => theme.size.xl});
        object-fit : cover;
    }
`
const Content = styled.p`
    font-size: ${({theme}) => theme.fontSize.xs};
    white-space: nowrap; /* 한 줄로 제한 */
    overflow: hidden; /* 넘어간 부분 숨김 */
    text-overflow: ellipsis; /* '...'으로 표시 */
`

const ReviewPage = ({
    title,
    user_id,
    uploadTime,
    src,
    content

}) => {
    return(
        <ReviewPageWrapper>
            <Title>
                {title}
            </Title>
            <InfoContainer>
                <div>{user_id}</div>
                |
                <div>{uploadTime}</div>
            </InfoContainer>
            <img src={src}/>
            <Content>
                {content}
            </Content>
        </ReviewPageWrapper>
    )
}

const ReviewPageObj = {
    src:"https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-blue-sky-and-white-clouds-pure-sky-image_786707.jpg",
    user_id: "Heydy",
    uploadTime: "2024.09.21",
    title:"드디어 찾아온 가을,  신천 플로깅 어때요?",
    content:"길었던 여름의 뜨거운 열기가 지나가고, 시원한 가을 바람이 불어오고 있네요. 오늘의 후기는 9월 20일에 진행했던 신천 플로깅 후기입니다! 이번 플로깅은 경북대학교 학생들과 지역 주민들이 함께 모여 신천 일대를 청소하며 환경 보호에 대한 중요성을 다시 한번 생각해보는 시간을 가졌습니다. 환경 보호를 위해 직접 발 벗고 나서는 일이 처음인 참가자들도 있었지만, 다들 금방 적응해 활발하게 움직였습니다. 또한, 경북대학교 환경 동아리 학생들이 리더 역할을 맡아 효율적으로 구역을 나누어 청소를 진행했습니다. 덕분에 넓은 신천 구역을 꽤 짧은 시간 안에 깨끗하게 만들 수 있었습니다. 무엇보다도, 참가자들끼리 소통하며 즐겁게 활동하는 분위기가 인상적이었어요. "
}


const Review = () => {
    const [reviewList, setReviewList] = useState([]);
    useEffect(() => {
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/review/list"
        })
        .then((response) => {
            setReviewList(response.data.reviews);
        })
    },[]);
    return(
        <Routes>
            <Route path="/" element={
                <ReviewCardContainer>
                    {
                        reviewList.map((review, index) => {
                            return(
                                <ReviewCard {...review} key = {index}/>
                            )
                        })
                    }
                    <ReviewCard {...ReviewObj} />
                    <ReviewCard {...ReviewObj} />
                    <ReviewCard {...ReviewObj} />
                </ReviewCardContainer>
            }/>

            <Route path="/:reviewId" element={
                <ReviewPageContainer>
                    <ReviewPage {...ReviewPageObj} />
                    리뷰 1개 페이지입니다.
                </ReviewPageContainer>
            } />
        </Routes>
        
    )

}

export default Review;