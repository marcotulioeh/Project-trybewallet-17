import React from 'react';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
        <TableExpense />
      </>
    );
  }
}

export default Wallet;
