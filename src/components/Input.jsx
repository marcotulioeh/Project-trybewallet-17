import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, name, value, placeholder, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <input
          type={ type }
          name={ name }
          value={ value }
          placeholder={ placeholder }
          onChange={ onChange }
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
}.isRequired;

export default Input;
