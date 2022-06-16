import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

 const Item = styled.span`
    width: 125px;
    border: 2px solid #FFF;
    margin: 2px;
    border-radius: 4px;
    & > * {
        font-size: 18px;
    }
 `

export {Wrapper, Item}

