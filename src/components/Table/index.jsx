import React from "react";
import { Flex } from "../ui/flexcontainer";
import { Text } from "../ui/text";
import { Wrapper, Item } from "./styled";

function Table({data, ...props}) {
    
    return (
        <Flex {...props}>
            <Wrapper>
                {data.map((cur => (
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
                                {(+cur.buy).toFixed(2)}
                            </Text>
                        </Item>
                        <Item>
                            <Text>
                                {(+cur.sale).toFixed(2)}
                            </Text>
                        </Item>
                    </Flex>
                )))}
            </Wrapper>
                           
        </Flex>
    )
}

export default Table;