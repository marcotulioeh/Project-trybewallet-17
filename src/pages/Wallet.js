import React from 'react';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: '',
  //   };
  // }

  render() {
    // const { id } = this.state;

    return (
      <>
        <Header />
        <AddExpense />
      </>
    );
  }
}

export default Wallet;
