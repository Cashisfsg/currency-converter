import React, { useState, useEffect, useRef } from "react";
import { Wrapper, InputItem, ErrorMessagesArea, ErrorMessage} from "./styled";

function Input({type, value, onChange, placeholder, isError, errorMessages}) {  

    const [position, setPosition] = useState(0);

    const inputRef = useRef(null);

    useEffect(() => {
        if(inputRef !== null) {
            inputRef.current.selectionStart = position;
            inputRef.current.selectionEnd = position;
            
        }
    }, [value])

    return (
        <Wrapper>
            <InputItem
                type={type} 
                value={value} 
                onChange={(e) => onChange(e, setPosition)}
                required={true}
                ref = {inputRef} />
            <span>{placeholder}</span>
            <ErrorMessagesArea style={{display: "flex", flexDirection: "column"}}>
                {isError && Object.values(errorMessages).map((error, i) => (
                    <ErrorMessage key={i}>{error}</ErrorMessage>
                ))}
            </ErrorMessagesArea>
        </Wrapper>
    )
}

export default Input;