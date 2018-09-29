import React from 'react';
import { render } from 'react-dom';
import Keypad from '../../src';
import styled from 'styled-components';

const App = () => (
  <AppContainer>
    <Keypad />
  </AppContainer>
);

const AppContainer = styled.div`
  height: 500px;
  width: 500px;
  border: 1px black solid;
`;

render(<App />, document.getElementById('root'));
