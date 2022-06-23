import React from "react";
import styled from "styled-components";

const SelectItem = styled.select.attrs(({value}) => ({
    value: value || "",
}))`
    font-family: Pangolin;
    font-size: 14px;
    box-sizing: border-box;
    padding: 6px 12px;
    height: 40px;
    width: 275px;
    color: grey;
    border: none;
    border-radius: 8px;

    &:focus {
        outline: none;
    }

    &:hover {
        border: 3px solid #00dfC4;
    }
`;

function Select({currencysList, value, onChange}) {

        return (    
        <SelectItem
            value={value}
            onChange={onChange}>
            {currencysList.map((cur, i) => (
                i == 0
                ? <option key={cur.r030} defaultValue={cur.txt}>{cur.txt}</option>
                : <option key={cur.r030} value={cur.txt}>{cur.txt}</option>
            ))}
        </SelectItem>
    )
}

export default Select;