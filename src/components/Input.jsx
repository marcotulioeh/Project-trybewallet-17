import React from 'react';
import PropTypes from 'prop-types';

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
