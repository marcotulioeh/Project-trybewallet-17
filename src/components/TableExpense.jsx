import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletPay } from '../actions';

class TableExpense extends React.Component {
  handleDelet = (target, datPay) => {
    const { remove } = this.props;
    if (target.name === 'delete') remove(datPay);
  };

  render() {
    const { expenses, handleEdition } = this.props;
    const { handleDelet } = this;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Categoria</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        <div>
          {expenses.map((expense) => {
            const {
              id, description, tag, method, value, currency, exchangeRates,
            } = expense;
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{(exchangeRates[currency].name).split('/')[0]}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    name="edit"
                    onClick={ () => handleEdition(id) }
                    data-testid="edit-btn"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    name="delete"
                    onClick={ ({ target }) => handleDelet(target, id) }
                    data-testid="delete-btn"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            );
          })}
        </div>
      </table>
    );
  }
}

TableExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  remove: PropTypes.string,
  handleEdition: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  remove: PropTypes.func,
});

const mapDispatchToProps = (dispatch) => ({ remove: (id) => dispatch(deletPay(id)) });

export default connect(mapStateToProps, mapDispatchToProps)(TableExpense);
