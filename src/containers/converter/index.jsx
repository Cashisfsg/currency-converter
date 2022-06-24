import React, { useState, useEffect } from "react";
import { Flex } from "../../components/ui/flexcontainer";
import Button from "../../components/ui/button";
import CoinContainer from "../../components/CoinContainer";
import useInput from "../../hooks/useInput";


function Converter({currencysList, ...props}) {

    const [firstCurrency, setFirstCurrency] = useState({name: currencysList[0].txt, amount: 1, rate: +currencysList[0].rate})
    const [secondCurrency, setSecondCurrency] = useState({name: currencysList[0].txt, amount: 1, rate: +currencysList[0].rate})

    const [isReverse, setIsReverse] = useState(false);

    const firstInput = useInput("", {maxLength: 12, isDigit: false});
    const secondInput = useInput("", {maxLength: 12, isDigit: false});

    const RefreshInput = (e, [firstCur, secondCur], [setFirstCur, setSecondCur]) => {
        console.log(e);
        setFirstCur(firstCur => ({
            ...firstCur,
            amount: +e
        }))
        setSecondCur(secondCur => ({
            ...secondCur,
            amount: +e / +firstCur.rate * +secondCur.rate
        })) 
    }

    useEffect(() => {
        RefreshInput(firstInput.value, 
            [firstCurrency, secondCurrency], 
            [setFirstCurrency, setSecondCurrency])
    }, [firstInput.value])
    
    useEffect(() => {
        RefreshInput(secondInput.value, 
            [secondCurrency, firstCurrency], 
            [setSecondCurrency, setFirstCurrency])
    }, [secondInput.value])

    const RefreshName = (e, [firstCur, secondCur], setFirstCur) => {
        setFirstCur({...firstCur,
            name: e.target.value,
        })
        setFirstCur(firstCur => ({...firstCur,
            rate: +currencysList.find(el => el.txt == firstCur.name).rate
        }))
        setFirstCur(firstCur => ({...firstCur,
            amount: +secondCur.amount / +secondCur.rate * +firstCur.rate
        }))
    }


    
    return (
        <Flex {...props} direction={!isReverse ? "row" : "row-reverse"} >
                    
            <CoinContainer
                currentCurrency={firstCurrency}
                currencysList={currencysList} 
                onChangeSelect={(e) => RefreshName(e, [firstCurrency, secondCurrency] , setFirstCurrency)}
                input={firstInput}
                placeholder="first currency"
            />

            <Flex direction="column" gap="25px">
                <Button onClick={() => setIsReverse(!isReverse)}>
                    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </Button>
                <Button onClick={() => setIsReverse(!isReverse)}>
                    <ion-icon name="arrow-back-circle-outline"></ion-icon>
                </Button>
            </Flex>           
            
            <CoinContainer
                currentCurrency={secondCurrency} 
                currencysList={currencysList}
                onChangeSelect={(e) => RefreshName(e, [secondCurrency, firstCurrency], setSecondCurrency)}
                input={secondInput}
                placeholder="second currency"
            />

        </Flex>
    )
}

export default Converter;