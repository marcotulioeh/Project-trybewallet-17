import React from 'react';
import EditExpense from './EditExpense';
import AddExpense from './AddExpense';
import TableExpense from './TableExpense';

class ResultExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editEnabled: false,
      id: '',
    };
  }

  addEdit = () => {
    this.setState({
      editEnabled: false,
      id: '',
    });
  }

  triggerEdit = (id) => {
    this.setState({
      editEnabled: true,
      id,
    });
  }

  render() {
    const { editEnabled, id } = this.state;
    const { addEdit, triggerEdit } = this;
    return (
      <>
        {editEnabled ? <EditExpense onSubmit={ addEdit } id={ id } /> : <AddExpense />}
        <TableExpense handleEdition={ triggerEdit } />
      </>
    );
  }
}

export default ResultExpense;
