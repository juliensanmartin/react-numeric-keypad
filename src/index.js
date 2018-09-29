import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

class Keypad extends Component {
  // static propTypes = {
  //   reportIqn: PropTypes.string,
  //   theme: PropTypes.object
  // };
  state = { valueDisplayed: '' };

  render() {
    const { valueDisplayed } = this.state;
    return (
      <MainContainer>
        <KeypadContainer>
          <Button variant="fab" onClick={() => this._updateDisplay(0)}>
            0
          </Button>
          <Button variant="fab" onClick={() => this._updateDisplay(1)}>
            1
          </Button>
          <Button variant="fab" onClick={() => this._updateDisplay(2)}>
            2
          </Button>
          <Button variant="fab" onClick={() => this._updateDisplay(3)}>
            3
          </Button>
          <Button variant="fab" onClick={() => this._updateDisplay(4)}>
            4
          </Button>
          <Button variant="fab" onClick={() => this._updateDisplay(5)}>
            5
          </Button>
          <Button variant="fab" onClick={() => this._updateDisplay(6)}>
            6
          </Button>
          <Button variant="fab" onClick={() => this._updateDisplay(7)}>
            7
          </Button>
          <Button variant="fab" onClick={() => this._updateDisplay(8)}>
            8
          </Button>
          <Button variant="fab" onClick={() => this._updateDisplay(9)}>
            9
          </Button>
        </KeypadContainer>
        <Display>{valueDisplayed}</Display>
      </MainContainer>
    );
  }

  _updateDisplay = value => {
    const { valueDisplayed } = this.state;
    this.setState({ valueDisplayed: valueDisplayed + value });
  };
}

const MainContainer = styled.div`
  display: flex;
`;

const KeypadContainer = styled.div`
  display: flex;
`;

const Display = styled.div`
  display: flex;
`;

export default Keypad;
