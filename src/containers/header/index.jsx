import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Table from "../../components/Table";
import { Flex } from "../../components/ui/flexcontainer";
import { Title } from "../../components/ui/title";
import { Text } from "../../components/ui/text";
import { Hr } from "../../components/ui";
import { Loader } from "../../components/ui/loader";
import { Logo } from "./styled";

function Header(props) {

    const [{data, isLoading, isError, error}, setUrl] = useFetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");

    return (
        <Flex {...props}>
            <Logo />
                <Flex width="75%" gap="15px" direction="column">
                    <Title>
                        Курс валют
                    </Title>
                    {isLoading  
                        ? <Loader />
                            : isError 
                                ? <Text>{`Что-то пошло не так... ${error}`}</Text>
                                : <Table data = {data}
                                        width="100%" 
                                        direction="column"
                                        padding="0 10%"/>}
                        <Text style={{alignSelf: "flex-end"}}>

                            {`Актуальна інформація на ${new Date().toLocaleString().replace(/T.+/g, "")}`}
                        </Text>
                </Flex>
            <Hr />
        </Flex>
    )
}

export default Header;