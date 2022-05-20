import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import { awsomeFetch, addPay } from '../actions';
import Coins from './Coins';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      description: '',
      tag: 'Lazer',
    };
  }

  onChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  }

  handleChange = (e) => {
    const { savePay } = this.props;
    e.preventDefault();
    savePay(addPay, this.state);
    this.setState({
      value: '',
    });
  }

  render() {
    const { value, currency, method, description, tag } = this.state;
    const { onChange, handleChange } = this;
    const { currencies } = this.props;

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
        <button type="submit" onClick={ handleChange }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

AddExpense.propTypes = {
  addPay: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  savePay: (action, state) => dispatch(awsomeFetch(action, state)) });

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
