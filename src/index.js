import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

class Keypad extends Component {
  static propTypes = {
    buttons: PropTypes.array,
    size: PropTypes.oneOf(['medium', 'small', 'large', 'mini']),
    variant: PropTypes.oneOf([
      'text',
      'flat',
      'outlined',
      'contained',
      'raised',
      'fab',
      'extendedFab'
    ]),
    disabled: PropTypes.bool,
    color: PropTypes.string,
    shuffle: PropTypes.bool,
    numberButtonPerRow: PropTypes.number
  };

  static defaultProps = {
    buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    size: 'medium',
    variant: 'text',
    shuffle: false
  };

  state = { valueDisplayed: '' };

  render() {
    const { valueDisplayed } = this.state;
    const { numberButtonPerRow } = this.props;
    return (
      <>
        {!numberButtonPerRow && (
          <KeypadContainerResponsive>
            {this._renderButtons()}
          </KeypadContainerResponsive>
        )}
        {numberButtonPerRow && (
          <KeypadContainer>{this._renderRowsButtons()}</KeypadContainer>
        )}
        <Display>{valueDisplayed}</Display>
      </>
    );
  }

  _updateDisplay = value => {
    const { valueDisplayed } = this.state;
    this.setState({ valueDisplayed: valueDisplayed + value });
  };

  _shuffle = array => {
      let currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }  

  _renderRowsButtons = () => {
    const { buttons, numberButtonPerRow, shuffle } = this.props;
    const buttonsProcessed = shuffle ? this._shuffle(buttons) : buttons;
    const numberRows = buttons.length / numberButtonPerRow;
    let buttonsRows = [];
    for (let step = 0; step < numberRows; step++) {
      buttonsRows.push(buttonsProcessed.slice(step * numberButtonPerRow, (step + 1) * numberButtonPerRow));
    }
    return buttonsRows.map((buttonsRow, index) => (
      <KeypadRows key={index}>
        {buttonsRow.map(button => this._renderButton(button))}
      </KeypadRows>
    ));
  };

  _renderButtons = () => {
    const { buttons, shuffle } = this.props;
    const buttonsProcessed = shuffle ? this._shuffle(buttons) : buttons;
    return buttonsProcessed.map(button => this._renderButton(button));
  };

  _renderButton = key => {
    const { size, variant, color, disabled } = this.props;
    return (
      <Button
        key={key}
        variant={variant}
        size={size}
        color={color}
        disabled={disabled}
        onClick={() => this._updateDisplay(key)}
      >
        {key}
      </Button>
    );
  };
}

const KeypadContainerResponsive = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const KeypadContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-evenly;
  flex-direction: column;
`;

const KeypadRows = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
`;

const Display = styled.div`
  display: flex;
`;

export default Keypad;
