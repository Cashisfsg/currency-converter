import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

    position: relative;
    width: 275px;
    & > * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    & > span {
        position: absolute;
        color: grey;

        left: 0px;
        top: 7px;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        line-height: 150%;
        padding: 6px 12px;
        pointer-events: none;
        font-size: 16px;
        transition: 0.5s;
        padding: 0 10px;
    }

    & > :valid, & > :focus    
    {
        border: 3px solid #00dfC4;
        outline: none;
    }

    & > :focus ~ span, & > :valid ~ span    
    {
        transform: translateX(25px) translateY(-14px);
        font-size: 0.65em;
        background: #00dfc4;
        color: #1d2b3a;
        border-radius: 2px;
        outline: none;
    }
`;

const InputItem = styled("input").attrs(({value, type}) => ({
    type: type || "text",
    value: value || "",
}))`
    font-size: 1em;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding: 6px 12px;
    color: grey;
    line-height: 150%;
    border: 2px solid grey;
    border-radius: 8px;
`;

const ErrorMessagesArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ErrorMessage = styled.div`
    font-family: Poppins, sans-serif;
    font-size: 12px;
    color: #fff;
    font-weight: 700;
`;

function Input({type, value, onChange, placeholder, isError, errorMessages}) {  

    return (
        <Wrapper>
            <InputItem
                type={type} 
                value={value} 
                onChange={onChange}
                required={true} />
            <span>{placeholder}</span>
            <ErrorMessagesArea style={{display: "flex", flexDirection: "column"}}>
                {isError && Object.values(errorMessages).map((error, i) => (
                    <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "red"}} key={i}>{error}</span>
                ))}
            </ErrorMessagesArea>
        </Wrapper>
    )
}

export default Input;