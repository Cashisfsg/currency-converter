import React from "react";
import Table from "../../components/Table";
import { Flex, Title, Hr } from "../../components/ui";
import { Logo } from "./styled";

function Header(props) {

    return (
        <Flex {...props}>
            <Logo />
                <Flex width="100%" gap="15px" direction="column">
                    <Title>
                        Курс валют
                    </Title>
                    <Table width="100%" 
                           direction="column"
                           padding="0 10%"/>

                </Flex>
            <Hr />
        </Flex>
    )
}

export default Header;