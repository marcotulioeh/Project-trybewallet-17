import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Coins from './Coins';
import Input from './Input';
import { editPay } from '../actions';

class EditExpense extends Component {
  constructor(props) {
    super(props);

    const { id, expenses } = this.props;
    const thisPayment = expenses.find((expense) => expense.id === id);
    const { value, description, currency, method, tag } = thisPayment;

    this.state = {
      value,
      description,
      tag,
      method,
      currency,
      id,
    };
    console.log(this.state);
  }

  onChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  }

  handleClick = () => {
    const { edit, onSubmit, expenses } = this.props;
    const { id } = this.state;
    const filtered = expenses.find((payment) => payment.id === id);
    edit({ ...this.state, exchangeRates: filtered.exchangeRates });
    onSubmit();
  }

  render() {
    const {
      value,
      description,
      currency,
      tag,
      method,
    } = this.state;

    const { currencies } = this.props;
    const { handleClick, onChange } = this;

    return (
      <form>
        <Input
          label="Valor:"
          type="text"
          name="value"
          value={ value }
          placeholder="0.00"
          onChange={ onChange }
          id="value"
          dataTestId="value-input"
        />
        <Coins
          value={ currency }
          onChange={ onChange }
          currencies={ currencies }
        />
        <label htmlFor="method">
          Método de pagamento:
          <select
            value={ method }
            onChange={ onChange }
            id="method"
            data-testid="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categotia:
          <select
            value={ tag }
            onChange={ onChange }
            id="tag"
            data-testid="tag-input"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <Input
          label="Descrição:"
          type="text"
          name="description"
          value={ description }
          onChange={ onChange }
          id="description"
          dataTestId="description-input"
        />
        <button type="button" onClick={ handleClick }>
          Editar despesa
        </button>
      </form>
    );
  }
}

EditExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  edit: (payment) => dispatch(editPay(payment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
