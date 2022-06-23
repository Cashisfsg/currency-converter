import styled from "styled-components";

export const Title = styled.h1`
    font-family: "Pangolin";
    text-transform: none;
    line-height: 150%;
    color: ${({color}) => (color || "#FFF")};
    background-color: ${({bgcolor}) => bgcolor || "none"};
    font-size: ${({ size }) => (size || "35px")};
    font-weight: ${({ weight }) => (weight || "600")};
    padding: ${({ padding }) => (padding || null)};
    margin: ${({ margin }) => (margin || "0")};
    border-left: ${({ withBorder }) => (withBorder ? "3px solid #E6110C" : null)};
    padding-left: ${({ withBorder }) => (withBorder ? "15px" : null)};
`;