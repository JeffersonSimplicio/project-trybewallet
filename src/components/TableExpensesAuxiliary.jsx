import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getExtraData from '../services/getExtraData';
import deleteExpense from '../services/deleteExpense';
import { removeExpense, expenseEdit } from '../actions';

class TableExpensesAuxiliary extends React.Component {
  constructor() {
    super();
    this.removeExpense = this.removeExpense.bind(this);
    this.editingExpense = this.editingExpense.bind(this);
  }

  removeExpense({ target: { value: id } }) {
    // console.log('-----ININCIO DO CICLO-----'); // Teste
    // console.log('id que deve ser excluido', id); // Teste
    const { expenseList, dispatch } = this.props;
    // console.log('Lista inicial, antes de qualquer modificação', expenseList); // Teste
    const newListExpense = deleteExpense(expenseList, id);
    dispatch(removeExpense(newListExpense));
  }

  editingExpense(expense) {
    // console.log('Entrou na edição');
    // console.log(expense);
    const { dispatch } = this.props;
    dispatch(expenseEdit(expense));
  }

  render() {
    const { expenseData } = this.props;
    const valueNum = Number(expenseData.value);
    const extraData = getExtraData(expenseData);
    // console.log(expenseData);

    return (
      <tr>
        <td>{expenseData.description}</td>
        <td>{expenseData.tag}</td>
        <td>{expenseData.method}</td>
        <td>{valueNum.toFixed(2)}</td>
        <td>{extraData.currencyName}</td>
        <td>{extraData.exchangeNum.toFixed(2)}</td>
        <td>{extraData.convertedValue.toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            onClick={ () => this.editingExpense(expenseData) }
            data-testid="edit-btn"
          >
            Editar
          </button>
          <button
            type="button"
            value={ expenseData.id }
            onClick={ this.removeExpense }
            data-testid="delete-btn"
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

TableExpensesAuxiliary.propTypes = {
  expenseData: PropTypes.objectOf(PropTypes.any).isRequired,
  expenseList: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenseList: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpensesAuxiliary);
