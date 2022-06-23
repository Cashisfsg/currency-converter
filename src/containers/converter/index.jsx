import React, { useState, useEffect } from "react";
import { Flex } from "../../components/ui/flexcontainer";
import Button from "../../components/ui/button";
import CoinContainer from "../../components/CoinContainer";


function Converter({currencysList, ...props}) {

    const [firstCurrency, setFirstCurrency] = useState({name: currencysList[0].txt, amount: 1, rate: +currencysList[0].rate})
    const [secondCurrency, setSecondCurrency] = useState({name: currencysList[0].txt, amount: 1, rate: +currencysList[0].rate})

    const [isReverse, setIsReverse] = useState(false);

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

    const RefreshInput = (e, [firstCur, secondCur], [setFirstCur, setSecondCur]) => {
        setFirstCur(firstCur => ({
            ...firstCur,
            amount: +e.target.value
        }))
        setSecondCur(secondCur => ({
            ...secondCur,
            amount: +e.target.value / +firstCur.rate * +secondCur.rate
        }))
       
    }
    
    return (
        <Flex {...props} direction={isReverse ? "row" : "row-reverse"} >
                    
            <CoinContainer
                currentCurrency={firstCurrency}
                currencysList={currencysList} 
                onChangeSelect={(e) => RefreshName(e, [firstCurrency, secondCurrency] , setFirstCurrency)}
                onChangeInput={(e) => RefreshInput(e, 
                    [firstCurrency, secondCurrency], 
                    [setFirstCurrency, setSecondCurrency])}
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
                onChangeInput={(e) => RefreshInput(e, 
                    [secondCurrency, firstCurrency], 
                    [setSecondCurrency, setFirstCurrency])}
            />

        </Flex>
    )
}

export default Converter;