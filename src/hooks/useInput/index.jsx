import React, { useEffect, useState } from "react";
import useValidation from "../useValidation";

function useInput(initialValue, validations) {
    
    const [value, setValue] = useState(initialValue);   

    const {validValue, isDigitError, maxLengthError, errorsListMessage} = useValidation(value, validations);

    const onChange = (e) => {
        setValue(() => e.target.value);
    }

    return {
        value: validValue,
        isDigitError,
        maxLengthError,
        onChange,
        errorsListMessage
    }
}

export default useInput;