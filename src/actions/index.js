export const insertEmail = (email) => ({ type: 'INSERT_EMAIL', email });

export const currencies = (currency) => ({ type: 'CURRENCIES', currency });

export const addPay = (result, paymentInfo) => ({ type: 'ADD_PAY', paymentInfo, result });

export const delePay = (id) => ({ type: 'DELETE_PAY', id });

export const editPay = (paymentState) => ({ type: 'EDIT_PAY', paymentState });

export const awsomeFetch = (action, paymentInfo) => async (dispatch) => {
  const endpoit = 'https://economia.awesomeapi.com.br/json/all';
  const reponse = await fetch(endpoit);
  const data = await reponse.json();
  delete data.USDT;
  dispatch(action(data, paymentInfo));
};
