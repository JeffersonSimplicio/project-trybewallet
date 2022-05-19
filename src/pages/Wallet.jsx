import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    console.log('componentDidMount');
    dispatch(fetchCurrencies());
  }

  render() {
    const { emailUser } = this.props;
    return (
      <>
        <h1>TrybeWallet</h1>
        <h2
          data-testid="email-field"
        >
          {`Email: ${emailUser}`}
        </h2>

        <span data-testid="total-field">
          {`Despesas: R$${0}`}
          <span data-testid="header-currency-field">
            BRL
          </span>
        </span>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
