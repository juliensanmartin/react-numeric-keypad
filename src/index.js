import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

class Keypad extends Component {
  static propTypes = {
    buttons: PropTypes.array
  };

  static defaultProps = {
    buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  state = { valueDisplayed: '' };

  render() {
    const { valueDisplayed } = this.state;
    const { buttons } = this.props;
    return (
      <>
        <KeypadContainer>
          {this._renderButtons()}
        </KeypadContainer>
        <Display>{valueDisplayed}</Display>
      </>
    );
  }

  _updateDisplay = value => {
    const { valueDisplayed } = this.state;
    this.setState({ valueDisplayed: valueDisplayed + value });
  };

  _renderButtons = () => {
    const { buttons } = this.props;
    return buttons.map(button => (
      <Button mini key={button} variant="fab" onClick={() => this._updateDisplay(button)}>
        {button}
      </Button>
    ));
  }
}

const KeypadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const Display = styled.div`
  display: flex;
`;

export default Keypad;
