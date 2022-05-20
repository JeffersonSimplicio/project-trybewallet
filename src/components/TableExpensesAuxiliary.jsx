import React from 'react';
import PropTypes from 'prop-types';
import getExtraData from '../services/getExtraData';

class TableExpensesAuxiliary extends React.Component {
  render() {
    const { expenseData } = this.props;
    const valueNum = Number(expenseData.value);
    const extraData = getExtraData(expenseData);

    return (
      <tr key={ expenseData.id }>
        <td>{expenseData.description}</td>
        <td>{expenseData.tag}</td>
        <td>{expenseData.method}</td>
        <td>{valueNum.toFixed(2)}</td>
        <td>{extraData.currencyName}</td>
        <td>{extraData.exchangeNum.toFixed(2)}</td>
        <td>{extraData.convertedValue.toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </td>
      </tr>
    );
  }
}

TableExpensesAuxiliary.propTypes = {
  expenseData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TableExpensesAuxiliary;
