import Link from "next/link";
import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const PaginationLink = styled.a`
    padding: 2%;
    margin: 2%;
    background: #00bbf9;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
`;

const Pagination = ({ currentPage, hasMore }) => {
    return (
        <PaginationWrapper>
            <Link href={`?page=${parseInt(currentPage) - 1}`}>
                <PaginationLink>Previous</PaginationLink>
            </Link>
            <Link href={`?page=${parseInt(currentPage) + 1}`}>
                <PaginationLink>Next</PaginationLink>
            </Link>
        </PaginationWrapper>
    );
};

export default Pagination;
