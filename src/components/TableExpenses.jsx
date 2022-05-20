import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableExpensesAuxiliary from './TableExpensesAuxiliary';
// import getExtraData from '../services/getExtraData';

class TableExpenses extends React.Component {
  render() {
    const { expenseList } = this.props;
    // console.log(expenseList);
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense) => (
            <TableExpensesAuxiliary
              key={ expense.id }
              expenseData={ expense }
            />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  expenseList: state.wallet.expenses,
});

TableExpenses.propTypes = {
  expenseList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TableExpenses);
