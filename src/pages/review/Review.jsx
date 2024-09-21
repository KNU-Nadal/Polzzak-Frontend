import styled from "styled-components";
import Title from "../../components/Title";
import Text from "../../components/Text";
import ReviewCard from "../../components/ReviewCard";
import { Route, Routes, useParams } from "react-router-dom";
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
        margin-bottom: ${({theme}) => theme.size.base};;
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
    user_name,
    image_name,
    content

}) => {
    return(
        <ReviewPageWrapper>
            <Title>
                {title}
            </Title>
            <InfoContainer>
                <div>{user_name}</div>
            </InfoContainer>
            <img src={image_name}/>
            <Text>
                {content}
            </Text>
        </ReviewPageWrapper>
    )
}



const ReviewRoot = () => {
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
        <ReviewCardContainer>
                    {
                        reviewList.map((review, index) => {
                            return(
                                <ReviewCard {...review} key = {index}/>
                            )
                        })
                    }
        </ReviewCardContainer>
    )
}

const ReviewIdPage = () => {
    const params = useParams();
    const [review, setReview] = useState({});
    useEffect(() => {
        axios({
            method : 'GET', 
            url: import.meta.env.VITE_POLZZAK_API_URL + "/review",
            params: {
                id: params.reviewId
            }
        })
        .then((response) => {
            console.log(response.data);
            setReview(response.data);
        })
    },[]);
    return(
        <ReviewPageContainer>
            <ReviewPage {...review.review} />
        </ReviewPageContainer>
    )
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
                <ReviewRoot />
            }/>

            <Route path="/:reviewId" element={
                <ReviewIdPage />
            } />
        </Routes>
        
    )

}

export default Review;