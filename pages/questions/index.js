import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Card from "../../components/Card";
import { useRouter } from "next/router";

const QuestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5%;
`;

const CardLink = styled.a`
    text-decoration: none;
`;

const Questions = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

    const router = useRouter();
    const { page } = router.query;
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            const data = await fetch(
                `https://api.stackexchange.com/2.2/questions?${
                    page ? `page=${page}&` : ``
                }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
            );

            const res = await data.json();

            if (res) {
                setQuestions(res.items);
                setIsLoading(false);
                // console.log(res);
            }
        }
        fetchData();
    }, [page]);

    return (
        <QuestionsContainer>
            <h2>Questions</h2>
            {isLoading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    {questions.map((q) => (
                        <Link
                            key={q.question_id}
                            href={`/questions/${q.question_id}`}
                            passHref
                        >
                            <CardLink>
                                <Card
                                    title={q.title}
                                    views={q.view_count}
                                    answers={q.answer_count}
                                    is_answered={q.is_answered}
                                />
                            </CardLink>
                        </Link>
                    ))}
                </div>
            )}
        </QuestionsContainer>
    );
};

export default Questions;
