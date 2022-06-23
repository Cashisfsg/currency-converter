import styled from 'styled-components';

const Hr = styled.hr`
    width: 100%;
    margin: 20px 0;
    border-color: 5px #FFF;
    
`;

const Icon = styled.span`
    font-size: ${({fsize}) => (fsize || "24px")};
    padding: ${({padding}) => (padding || "16px")};
    font-weight: 400;
`;

export { Hr, Icon }