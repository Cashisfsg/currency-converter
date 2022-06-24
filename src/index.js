import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import './index.css';
import Header from './containers/header';
import Body from './containers/body';

const Wrapper = styled.div`
    width: 75%;
    height: max-content;
    min-height: 100vh;
    min-width: 800px;
    margin: 0 auto;
    position: ${({ position }) => (position || null)};
    background: rgb(79, 109, 122);
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Wrapper>
            <Header width="100%" direction="column" />
            <Body direction="column" gap="15px"/>
        </Wrapper>
  </React.StrictMode>
);

