import React from "react";
import { Flex } from "../ui/flexcontainer";
import Input from "../ui/input";
import Select from "../ui/select";


function CoinContainer({currentCurrency, currencysList, onChangeSelect, onChangeInput}) {

    return (
        <Flex 
            direction="column"
            padding="25px" 
            gap="20px"
            withborder="2px solid #FFF"
            radius="14px">

            <Input
                value={!isNaN(currentCurrency.amount) ? currentCurrency.amount.toFixed(2) : "Тільки цифри"}
                onChange={(e) => onChangeInput(e) } />
                
            <Select
                value = {currentCurrency.name}
                onChange = {(e) => onChangeSelect(e)}
                currencysList={currencysList}
            
        />
    </Flex>
    )
}

export default CoinContainer;