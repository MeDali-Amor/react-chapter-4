import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    background-color: #00bbf9;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <h2>Hello</h2>
        </HeaderWrapper>
    );
};

export default Header;
