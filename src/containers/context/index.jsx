import React, { useState } from "react";
import Context from "./context";

function Provider({ children }) {
    
    const[currency, setCurrency] = useState()
    const[course, setCourse] = useState()

    const providedValue = {
        currency,
        course,
        setCurrency,
        setCourse
    }

    return <Context.Provider value = {providedValue}>{children}</Context.Provider>

}

export default Provider;