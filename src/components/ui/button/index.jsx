import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    display: flex;
    height: min-content;
    padding: 0;
    border: none;
    background: none;
    box-sizing: content-box;
    max-height: min-content;
    font-size: 3rem;
    color: #FFF;
    cursor: pointer;

    &:hover {
        color: #00dfC4
    }
`

function Button({children, onClick}) {
    return (
        <Btn onClick={onClick}>{children}</Btn>
    )
}

export default Button;