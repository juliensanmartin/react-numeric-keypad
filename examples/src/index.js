import React from 'react';
import { render } from 'react-dom';
import Keypad from '../../src';
import styled from 'styled-components';

const App = () => (
  <AppContainer>
    <Keypad numberButtonPerRow={5} shuffle={true} variant={'contained'}/>
    <Keypad numberButtonPerRow={5} size={'small'} shuffle={true} variant={'outlined'}/>
  </AppContainer>
);

const AppContainer = styled.div`
  height: 30%;
  width: 30%;
  border: 1px black solid;
`;

render(<App />, document.getElementById('root'));
