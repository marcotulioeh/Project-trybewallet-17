import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

class Input extends React.Component {
  render() {
    const {
      label,
      type,
      name,
      value,
      placeholder,
      onChange,
      dataTestId,
      id,
    } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
          <input
            type={ type }
            name={ name }
            value={ value }
            placeholder={ placeholder }
            onChange={ onChange }
            id={ id }
            data-testid={ dataTestId }
          />
        </label>
      </div>

    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.string,
  dataTestId: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default Input;
