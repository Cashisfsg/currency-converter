import { useState, useEffect } from "react";

function useValidation (value, validations) {
    
    const [isDigitError, setIsDigitError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [errorsListMessage, setErrorsListMessage] = useState({});
    const [validValue, setValidValue] = useState(value);

    useEffect(() => {
        setErrorsListMessage({})
        for (const validation in validations) {
            switch (validation) {
                case "isDigit":
                    if (isNaN(Number(value))) {
                        setIsDigitError(true);
                        setErrorsListMessage({
                            ...errorsListMessage,
                            [validation]: "Только цифры"
                        });
                        setValidValue(() => validValue.replace(/[^\d\.]+|(?<=\d\.\d{2})[\d\w\s\.]+/g, ""));
                    } else {
                        setIsDigitError(false);
                    }
                    break;
                case "maxLength":
                    if (value.length > validations[validation]) {
                        setValidValue(() => value.substring(0, validations[validation]));
                        setMaxLengthError(true);
                        setErrorsListMessage({
                            ...errorsListMessage,
                            [validation]: `Максимальное количество символов ${validations[validation]}`
                        });
                    } else {
                        setMaxLengthError(false);
                        setValidValue(() => value.replace(/(?<=\d\.[\d]{2})[\d\s]+/g, "").trim());
                    }
                    break;
            }
        }
    }, [value])

    return {validValue, isDigitError, maxLengthError, errorsListMessage}

}

export default useValidation;