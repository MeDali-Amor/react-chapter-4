import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Card from "../../components/Card";

const QuestionDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

const QuestionDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [question, setQuestion] = useState([]);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            const data = await fetch(
                // `https://api.stackexchange.com/2.3/questions/72992418/answers?&site=stackoverflow`
                `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`
            );
            const res = await data.json();

            if (res.items) {
                setQuestion(res.items[0]);
                setIsLoading(false);
                console.log(res.items[0]);
            }
        }
        id && fetchData();
    }, [id]);

    return (
        <QuestionDetailsContainer>
            <h2>Question Details : {id}</h2>
            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <Card
                    title={question.title}
                    views={question.view_count}
                    answers={question.answer_count}
                    is_answered={question.is_answered}
                />
            )}
        </QuestionDetailsContainer>
    );
};

export default QuestionDetails;
