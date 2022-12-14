const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CURRENCIES':
    return { ...state, currencies: Object.keys(action.currency) };
  case 'ADD_PAY':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.paymentInfo, id: state.expenses.length, exchangeRates: action.result,
        },
      ],
    };
  case 'EDIT_PAY':
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((payment) => payment.id !== action.paymentState.id),
        action.paymentState].sort((a, b) => a.id - b.id),
    };
  case 'DELETE_PAY':
    return {
      ...state,
      expenses: state.expenses
        .filter((payment) => payment.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
