import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Flex } from "../../components/ui/flexcontainer";
import { Title } from "../../components/ui/title";
import { Text } from "../../components/ui/text";
import { Hr } from "../../components/ui";
import Converter from "../converter";
import { Loader } from "../../components/ui/loader";

function Body(props) {

    const [{data: currencysList, isLoading, isError, error}, setUrl] = useFetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
       
    return (
        <Flex {...props}>   
            <Title>Конвертер валют</Title>

            {isLoading 
                ? <Loader />
                : isError
                    ? <Title>{`Что-то пошло не так... ${error}`}</Title>
                    : <Converter currencysList = {currencysList} width="max-content" gap="15px" />}

            <Hr />

            <Flex >
                <Text margin="0 0 30px 0">Додаток розроблено на базі фреймворку React з використанням бібліотеки styled-components. 
                    Інформація взята з сайту НБУ та Приват Банку
                </Text>
            </Flex>
        </Flex>
    )                                         
}

export default Body;