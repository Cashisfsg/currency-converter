import React from "react";
import styled from "styled-components";

const InputItem = styled("input").attrs(({value, type}) => ({
    type: type || "text",
    value: value || "",
    maxLength: "12",

}))`
    font-family: Pangolin;
    font-size: 16px;
    box-sizing: border-box;
    height: 40px;
    width: 275px;
    padding: 6px 12px;
    color: grey;
    border: none;
    border-radius: 8px;

    &:focus {
        outline: none;
    } 

    &:hover, :active{
        border: 3px solid #00dfC4;
    }

    &::placeholder {
        font-family: Pangolin;
    }
`;

function Input({value, onChange}) {  

    return (
        <InputItem 
            value={value} 
            onChange={onChange} />
    )
}

export default Input;