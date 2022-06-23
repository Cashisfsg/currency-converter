import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    justify-content: ${({ justify }) => (justify || 'center')};
    align-items: ${({ align }) => (align || 'center')};
    flex-wrap: ${({ wrap}) => wrap || 'no-wrap'};
    flex-direction: ${({ direction }) => (direction || 'row')};
    flex: ${({ flex }) => (flex || null)};

    width: ${({ width }) => (width || "auto")};
    height: ${({ height }) => (height || "auto")};
    min-width: ${({minw}) => (minw || null)};
    min-height: ${({minh}) => (minh || null)};
    max-width: ${({maxw}) => (maxw || null)};
    max-height: ${({maxh}) => (maxh || null)};


    padding: ${({ padding }) => (padding || null)};
    margin: ${({ margin }) => (margin || null)};
    gap: ${({ gap }) => (gap || null)};

    border: ${({ withborder }) => (withborder || null)};
    border-radius: ${({radius}) => (radius || null)};
    box-sizing: ${({boxsize}) => (boxsize || "border-box")};
    overflow-y: ${({ overflow }) => (overflow || null)};

    box-shadow: ${({shadow}) => (shadow || "none")};
    background: ${({ bgcolor }) => (bgcolor || null)};
`;