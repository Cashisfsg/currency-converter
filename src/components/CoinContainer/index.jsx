import React from "react";
import { Flex } from "../ui/flexcontainer";
import Input from "../ui/input";
import Select from "../ui/select";
import useInput from "../../hooks/useInput"

function CoinContainer({currentCurrency, currencysList, onChangeSelect, input, placeholder}) {

    return (
        <Flex 
            direction="column"
            padding="25px" 
            gap="20px"
            withborder="2px solid #FFF"
            radius="14px">

            <Input
                value={currentCurrency.amount.toFixed(2)}
                onChange={(e) => input.onChange(e) } 
                placeholder={placeholder}
                isError={input.isDigitError || input.maxLengthError}
                errorMessages={input.errorsListMessage}/>
                
            <Select
                value = {currentCurrency.name}
                onChange = {(e) => onChangeSelect(e)}
                currencysList={currencysList}
            
        />
    </Flex>
    )
}

export default CoinContainer;