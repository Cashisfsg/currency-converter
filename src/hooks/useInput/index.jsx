import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useCallback } from "react";
import { useState } from "react";
import useValidation from "../useValidation";

function useInput(initialValue, validations) {
    
    const [value, setValue] = useState(initialValue);   

    const {validValue, isDigitError, maxLengthError, errorsListMessage} = useValidation(value, validations);

    const onChange = useCallback((e, setPosition) => {
        setValue(() => e.target.value);
        setPosition(e.target.selectionStart);
    })

    return {
        value: validValue,
        isDigitError,
        maxLengthError,
        onChange,
        errorsListMessage
    }
}

export default useInput;