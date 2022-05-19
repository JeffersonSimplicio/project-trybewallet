import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newExpense } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.getValue = this.getValue.bind(this);
    this.attachExpense = this.attachExpense.bind(this);
    this.state = {
      value: '',
      description: '',
      selectCurrency: '',
      paymentMethod: '',
      category: '',
    };
  }

  getValue({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  attachExpense() {
    const { dispatch, numberId } = this.props;

    const {
      value,
      description,
      selectCurrency,
      paymentMethod,
      category,
    } = this.state;

    const expense = {
      id: numberId,
      value,
      description,
      currency: selectCurrency,
      method: paymentMethod,
      tag: category,
    };

    this.setState({
      value: '',
      description: '',
      selectCurrency: '',
      paymentMethod: '',
      category: '',
    });

    dispatch(newExpense(expense));
  }

  render() {
    const {
      value,
      description,
      selectCurrency,
      paymentMethod,
      category,
    } = this.state;

    const { currencies } = this.props;

    const paymentMethods = [
      'Dinheiro',
      'Cartão de crédito',
      'Cartão de débito',
    ];

    const categories = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];

    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            type="number"
            name="value"
            id="value-input"
            placeholder="0.00"
            value={ value }
            onChange={ this.getValue }
            data-testid="value-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            name="description"
            id="description-input"
            placeholder="Almoço"
            value={ description }
            onChange={ this.getValue }
            data-testid="description-input"
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            name="selectCurrency"
            id="currency-input"
            value={ selectCurrency }
            onChange={ this.getValue }
          >
            {currencies.map((currency, index) => (
              <option key={ index } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Métodos de Pagamento:
          <select
            name="paymentMethod"
            id="method-input"
            value={ paymentMethod }
            onChange={ this.getValue }
            data-testid="method-input"
          >
            {paymentMethods.map((method, index) => (
              <option key={ index } value={ method }>{ method }</option>
            ))}
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          <select
            name="category"
            id="tag-input"
            value={ category }
            onChange={ this.getValue }
            data-testid="tag-input"
          >
            {categories.map((tag, index) => (
              <option key={ index } value={ tag }>{ tag }</option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={ this.attachExpense }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  numberId: state.wallet.expenses.length,
});

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
  numberId: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ExpenseForm);
