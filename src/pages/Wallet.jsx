import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';
import ExpenseForm from '../components/ExpenseForm';
import sumExpenses from '../services/sumExpenses';
import TableExpenses from '../components/TableExpenses';
import Loading from '../components/Loading';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    const { emailUser, expenseList, loading } = this.props;
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
        {loading
          ? <Loading />
          : <ExpenseForm />}
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
  loading: state.wallet.loading,
});

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  expenseList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Wallet);
