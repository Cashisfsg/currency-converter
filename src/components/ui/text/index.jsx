import styled from "styled-components";

export const Text = styled.p`
    display: flex;
    justify-content: ${({ justify }) => (justify || 'center')};
    align-items: ${({ align }) => (align || 'center')};

    height: ${({height}) => (height || "auto")};
    width: ${({ width}) => (width || "auto")};
    padding: ${({ padding }) => (padding || null)};
    margin: ${({ margin }) => (margin || 0)};

    font-family: Pangolin;
    font-size: ${({ size }) => (size || "13px")};
    font-weight: ${({ weight }) => (weight || null)};
    line-height: ${({ lineheight }) => (lineheight || "150%")};
    color: ${({ color }) => (color || "#FFF")};

    background-color: ${({ bgcolor }) => (bgcolor || null)};
`;