import React from 'react';
import PropTypes from 'prop-types';

class Coins extends React.Component {
  render() {
    const { value, onChange, currencies } = this.props;

    return (
      <label htmlFor="currency">
        Moeda:
        <select
          value={ value }
          onChange={ onChange }
          id="currency"
          data-testid="currency-input"
        >
          {currencies.map((currency, index) => (
            <option key={ index }>
              {currency}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Coins.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  currencies: PropTypes.array,
}.isRequired;

export default Coins;
