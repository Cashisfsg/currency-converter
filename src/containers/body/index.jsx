import React, { useState, useContext } from "react";
import { Flex, Text, Title, Input, Hr } from "../../components/ui";
import Select from "../../components/Select";
import Context from "../context/context";

function Body(props) {

    const {course} = useContext(Context)

    const [coin, setCoin] = useState([{name: course[0].ccy, amount: 1, cost: +course[0].buy},
                                      {name: course[0].ccy, amount: 1, cost: +course[0].buy}])

    const [reverse, setReverse] = useState(false)

    return (
        <Flex {...props}>   
            <Title>Конвертер валют</Title>
            <Flex maxw="400px" gap="15px" direction={!reverse ? "row" : "row-reverse"}>
                <Flex direction="column"
                      flex=""
                      padding="25px" 
                      gap="20px"
                      withborder="2px solid #FFF"
                      radius="14px">
                      
                    <Input 
                        value={isNaN(+coin[0].amount) ? "Тільки цифри" : (coin[0].amount).toFixed(2)} 
                        onChange={(e => setCoin(coin.map((cur, i) => {
                            if(i == 0) {
                                return {...cur, amount: +e.target.value}
                            } else {
                                return {...cur, amount: +e.target.value / +coin[0].cost * +coin[1].cost}
                            }
                        })))} />
                    <Select
                        value = {coin[0].name}
                        onChange = {(e) => setCoin(() => coin.map((cur, i) => {
                            if(i==0){
                                return {...cur, name: e, 
                                                amount: +coin[1].amount / +coin[1].cost * +coin[0].cost, 
                                                cost: +course.find(el => {return el.ccy == e}).buy}
                            }
                            else {
                                return {...cur}
                            }
                        }))}
                        currency={course}
                        
                    />
                    <Text>{`1 ${coin[0].name} = ${(parseFloat(coin[0].cost).toFixed(2))} UAN`}</Text>
                    <Text>{`1 UAN = ${((1/parseFloat(coin[0].cost)).toFixed(2))} ${coin[0].name}`}</Text>
                    <Text>{`${parseFloat(coin[0].amount).toFixed(2)} ${coin[0].name} = ${((coin[0].amount*parseFloat(coin[0].cost)).toFixed(2))} UAN`}</Text>
                    <Text>{`${parseFloat(coin[0].amount).toFixed(2)} UAN = ${((parseFloat(coin[0].amount)/parseFloat(coin[0].cost)).toFixed(2))} ${coin[0].name}`}</Text>
                </Flex>

                <Flex direction="column" gap="5px">
                    <span style={{fontSize: "3rem", color: "#FFF", cursor: "pointer"}} 
                          onClick={() => setReverse(!reverse)}>
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                    </span>
                    <span style={{fontSize: "3rem", color: "#FFF", cursor: "pointer"}} 
                          onClick={() => setReverse(!reverse)}>
                        <ion-icon name="arrow-back-circle-outline"></ion-icon>
                    </span>
                </Flex>           

                <Flex direction="column" 
                      height="100%"
                      padding="25px"
                      gap="20px"
                      withborder="2px solid #FFF"
                      radius="14px">
                    <Input value={isNaN(coin[1].amount) ? "Тільки цифри" : (coin[1].amount).toFixed(2)} 
                           onChange={(e) => setCoin(coin.map((cur, i) => {
                            if(i == 0) {
                                return {...cur, amount: +e.target.value / +coin[1].cost * +coin[0].cost}
                            } else {
                                return {...cur, amount: +e.target.value}
                            }
                    }))}></Input>
                    <Select
                        value = {coin[1].name}
                        onChange = {(e) => setCoin(() => coin.map((cur, i) => {
                            if(i == 1) {
                                return {...cur, name: e, 
                                                amount: +coin[0].amount / +coin[0].cost * +coin[1].cost, 
                                                cost: +course.find(el => {return el.ccy == e}).buy}
                            } else {
                                return {...cur}
                            }
                        }))}
                        currency={course}  
                    />
                    <Text>{`1 ${coin[1].name} = ${(parseFloat(coin[1].cost).toFixed(2))} UAN`}</Text>
                    <Text>{`1 UAN = ${((1/parseFloat(coin[1].cost)).toFixed(2))} ${coin[1].name}`}</Text>
                    <Text>{`${parseFloat(coin[1].amount).toFixed(2)} ${coin[1].name} = ${((coin[1].amount*parseFloat(coin[1].cost)).toFixed(2))} UAN`}</Text>
                    <Text>{`${parseFloat(coin[1].amount).toFixed(2)} UAN = ${((parseFloat(coin[1].amount)/parseFloat(coin[1].cost)).toFixed(2))} ${coin[1].name}`}</Text>
                </Flex>
            </Flex>
            <Hr />
            <Flex>
                <Text style={{alignSelf: "flex-end"}}>Додаток розроблено на базі фреймворку React з використанням бібліотеки styled-components. 
                    Інформація взята з сайту Приват Банку
                </Text>
            </Flex>
        </Flex>
    )                                         
}

export default Body;