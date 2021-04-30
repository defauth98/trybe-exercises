import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/button.css';

class Button extends Component {
  render() {
    const { color, disable } = this.props;

    return (
      <button
        id="button"
        style={{ backgroundColor: color }}
        className={disable ? 'disable' : null}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string,
  disable: PropTypes.bool,
};

export default Button;
