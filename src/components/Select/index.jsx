import React from "react";
import { SelectItem } from "../ui";

function Select({currency, value, onChange}) {

        return (
        <SelectItem
            value={value}
            onChange={(event => onChange(event.target.value))}>
            {currency.map((cur, i) => (
                i == 0
                ? <option key={cur.ccy} selected defaultValue={cur.ccy}>{cur.ccy}</option>
                : <option key={cur.ccy} value={cur.ccy}>{cur.ccy}</option>
            ))}
        </SelectItem>
    )
}

export default Select;