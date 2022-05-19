import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencies, awsomeFetch } from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    const { currenciesFetch } = this.props;
    currenciesFetch();
  };

  render() {
    const { email, resulTotal } = this.props;

    return (
      <header>
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <div data-testid="total-field">
          { parseFloat(resulTotal).toFixed(2) }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  currenciesFetch: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  resulTotal: state.wallet.expenses
    .reduce((
      acc,
      { value, currency, exchangeRates },
    ) => acc + (parseFloat(exchangeRates[currency].ask) * value), 0) });

const mapDispatchToProps = (dispatch) => ({
  currenciesFetch: () => dispatch(awsomeFetch(currencies)) });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
