import React, { useContext } from "react";
import Context from "../../containers/context/context";
import { Flex, Text } from "../ui";
import { Wrapper, Item } from "./styled";

function Table(props) {

    const {currency} = useContext(Context)

    return (
        <Flex {...props}>
            <Wrapper>
                {currency.map((cur => (
                    <Flex key={cur.ccy} justify="space-around">
                        <Item>
                            <Text>
                                {cur.ccy}
                            </Text>
                        </Item>
                        <Item>
                            <Text>
                                {cur.base_ccy}
                            </Text>
                        </Item>
                        <Item>
                            <Text>
                                {cur.buy}
                            </Text>
                        </Item>
                        <Item>
                            <Text>
                                {cur.sale}
                            </Text>
                        </Item>
                    </Flex>
                )))}
            </Wrapper>
            <Text style={{alignSelf: "flex-end"}}>{`Актуальна інформація на ${new Date().toLocaleString().replace(/T.+/g, "")}`}</Text>               
        </Flex>
    )
}

export default Table;