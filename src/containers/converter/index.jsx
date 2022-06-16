import React, { useState, useEffect, useContext } from "react";
import Context from "../context/context";
import { Wrapper } from "../../components/ui";
import Header from "../header";
import Body from "../body";

function Converter() {

    const [isLoaded, setIsLoaded] = useState(false);
    const {setCourse, setCurrency} = useContext(Context);
  
    useEffect (() => async () => {
        await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
        .then(res => res.json())
        .then(data => {
            setCurrency(data);
        })
        await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=4")
        .then(res => res.json())
        .then(data => {
            setCourse(data);
            setIsLoaded(true);
        })
    },[])
  

    return (
        <Wrapper>
            {isLoaded && <Header width="100%" direction="column" />}
            {isLoaded && <Body direction="column" gap="15px"/>}
        </Wrapper>
    )
}

export default Converter;