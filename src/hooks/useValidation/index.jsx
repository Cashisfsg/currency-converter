import React,{ useState, useEffect } from "react";

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
                        console.log("IsDigitError")
                        setIsDigitError(true);
                        setErrorsListMessage({
                            ...errorsListMessage,
                            [validation]: "Только цифры"
                        });
                        setValidValue(() => value.slice(0, validations[validation] - 3).replace(/\D/g, ""));
                        console.log("Valid value: ", validValue)
                    } else {
                        setIsDigitError(false);
                    }
                    break;
                case "maxLength":
                    if (value.length > validations[validation]) {
                        setValidValue(() => value.slice(0, validations[validation] - 3));
                        console.log("Length error", validValue, typeof(value))
                        setMaxLengthError(true);
                        setErrorsListMessage({
                            ...errorsListMessage,
                            [validation]: `Максимальное количество символов ${validations[validation]}`
                        });
                    } else {
                        setMaxLengthError(false);

                        setValidValue(() => value);
                    }
                    break;
            }
        }
    }, [value])

    return {validValue, isDigitError, maxLengthError, errorsListMessage}

}

export default useValidation;