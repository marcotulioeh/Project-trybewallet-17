import React from 'react';
import Header from '../components/Header';
import ResultExpense from '../components/ResultExpense';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ResultExpense />
      </>
    );
  }
}

export default Wallet;
