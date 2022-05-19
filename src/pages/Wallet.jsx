import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';
import ExpenseForm from '../components/ExpenseForm';
import sumExpenses from '../services/sumExpenses';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    const { emailUser, expenseList } = this.props;
    const totalExpensesReal = sumExpenses(expenseList);

    return (
      <>
        <header>
          <h1>TrybeWallet</h1>

          <h2
            data-testid="email-field"
          >
            {`Email: ${emailUser}`}
          </h2>

          <span>Despesas: R$</span>
          <span data-testid="total-field">{totalExpensesReal.toFixed(2)}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <ExpenseForm />
        <main>
          <TableExpenses />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  expenseList: state.wallet.expenses,
});

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  expenseList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Wallet);
