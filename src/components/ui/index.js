import styled from 'styled-components';

const Wrapper = styled.div`
    width: 75%;
    min-height: 130vh;
    margin: 0 auto;
    position: ${({ position }) => (position || null)};
    background: rgb(79, 109, 122)
`;

const Flex = styled.div`
    display: flex;
    width: ${({ width }) => (width || "auto")};
    height: ${({ height }) => (height || "auto")};
    min-width: ${({minw}) => (minw || null)};
    min-height: ${({minh}) => (minh || null)};
    max-width: ${({maxw}) => (maxw || null)};
    max-height: ${({maxh}) => (maxh || null)};

    justify-content: ${({ justify }) => (justify || 'center')};
    align-items: ${({ align }) => (align || 'center')};
    flex-wrap: ${({ wrap}) => wrap || 'no-wrap'};
    flex-direction: ${({ direction }) => (direction || 'row')};
    padding: ${({ padding }) => (padding || null)};
    margin: ${({ margin }) => (margin || null)};
    flex: ${({ flex }) => (flex || null)};
    column-gap: ${({ gap }) => (gap || null)};
    row-gap: ${({ gap }) => (gap || null)};
    border: ${({ withborder }) => (withborder || null)};
    box-shadow: ${({shadow}) => (shadow || "none")};
    box-sizing: ${({boxsize}) => (boxsize || "border-box")};
    overflow-y: ${({ overflow }) => (overflow || null)};
    background: ${({ bgcolor }) => (bgcolor || null)};
    border-radius: ${({radius}) => (radius || null)};
    -ms-overflow-style: none;
    scrollbar-width: none;
        
    ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

const Title = styled.h1`
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

const Text = styled.p`
    display: flex;
    font-family: Pangolin;
    height: ${({height}) => (height || "auto")};
    width: ${({ width}) => (width || "auto")};
    justify-content: ${({ justify }) => (justify || 'center')};
    align-items: ${({ align }) => (align || 'center')};

    font-size: ${({ size }) => (size || "13px")};
    font-weight: ${({ weight }) => (weight || null)};
    line-height: ${({ lineheight }) => (lineheight || "150%")};
    color: ${({ color }) => (color || "#FFF")};
    padding: ${({ padding }) => (padding || null)};
    margin: ${({ margin }) => (margin || 0)};
    background-color: ${({ bgcolor }) => (bgcolor || null)};
    border-radius: ${({radius}) => (radius || 0)};
    opacity: ${({ opacity }) => (opacity || 1)};
    overflow-y: hidden;
    & > * {
        font-family: Pangolin;
        font-size: 13px;
        line-height: 150%;
        color: #fff

    }
`;

const Hr = styled.hr`
    width: 100%;
    margin: 20px 0;
    border-color: 5px #FFF;
    
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    font-family: Metropolis;
    font-weight: ${({ weight }) => (weight || 700)};
    font-size: ${({size}) => (size || "18px")};
    border: none;
    line-height: ${({lineheight}) => (lineheight || "100%")};
    cursor: pointer;
    width: ${({ width }) => (width || "auto")};
    height: ${({ height }) => (height || "auto")};
    color: ${({ color }) => (color || "#020106")};
    background-color: ${({ bgcolor }) => (bgcolor || "#E6110C")};
    box-shadow: ${({ shadow }) => (shadow || null)};
    border-radius: ${({ radius }) => (radius || null)}
`;

const Input = styled("input").attrs(({value, type}) => ({
    type: type || "text",
    value: value || "",
    maxLength: "12",

}))`
    font-family: Pangolin;
    font-size: 16px;
    box-sizing: border-box;
    height: 40px;
    width: 275px;
    padding: 6px 12px;
    color: grey;
    border: none;
    border-radius: 8px;
    &:focus {
        outline: none;
    } 

    &::placeholder {
        font-family: Pangolin;
    }
`;

const SelectItem = styled.select.attrs(({value}) => ({
    value: value || "",
}))`
    font-family: Pangolin;
    font-size: 14px;
    box-sizing: border-box;
    padding: 6px 12px;
    height: 40px;
    width: 275px;
    color: grey;
    border: none;
    border-radius: 8px;
    &:focus {
        outline: none;
    }
`;

const Icon = styled.span`
    font-size: ${({fsize}) => (fsize || "24px")};
    padding: ${({padding}) => (padding || "16px")};
    font-weight: 400;
`;

export {Wrapper, Flex, Title, Text, Hr, Button, Input, SelectItem, Icon}