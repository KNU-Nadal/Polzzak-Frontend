import styled from "styled-components";
import Title from "../../components/Title";
import ReviewCard from "../../components/ReviewCard";

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

const Review = () => {
    return(
        <>
        <ReviewCardContainer>
        <ReviewCard {...ReviewObj} />
        <ReviewCard {...ReviewObj} />
        <ReviewCard {...ReviewObj} />
        </ReviewCardContainer>
        </>
    )
}

export default Review;