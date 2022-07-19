import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    text-align: left;
    padding: 1%;
    background: #f5f3f4;
    border-radius: 12px;
    margin-bottom: 2%;
    border: ${(props) =>
        props.is_answered === true ? "3px solid #41C867" : "3px solid #ED6E78"};
`;

const Title = styled.h2`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkGray;
    color: black;
`;

const Count = styled.span`
    color: #326273;
`;

const Card = ({ title = "", views = 0, answers = 0, is_answered }) => {
    return (
        <CardWrapper is_answered={is_answered}>
            <Title>{title}</Title>
            <Count>{`Views: ${views} | Answers: ${answers}`}</Count>
        </CardWrapper>
    );
};

export default Card;
