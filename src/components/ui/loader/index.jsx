import styled from "styled-components";

export const Loader = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, transparent 30%, #e5f403);
    animation: animate 2s linear infinite;

    @keyframes animate {
        0%
        {
            transform: rotate(0deg);
            filter: hue-rotate(0deg);
        }
        100%
        {
            transform: rotate(360deg);
            filter: hue-rotate(360deg);
        }
    }

    :before {
        content: "";
        position: absolute;
        top: 6px;
        left: 6px;
        right: 6px;
        bottom: 6px;
        background: none;
        border-radius: 50%;
        z-index: 2;
    }

    :after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
        border-radius: 50%;
        z-index: 1;
        filter: blur(30px);
    }
`;