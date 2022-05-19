import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseForm extends React.Component {
  render() {
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
      <>
        <label htmlFor="value-input">
          Valor:
          <input
            type="number"
            name="value"
            id="value-input"
            placeholder="0.00"
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
            data-testid="description-input"
          />
        </label>

        <label htmlFor="currencies-input">
          Moeda:
          <select
            name="currencies"
            id="currencies-input"
          >
            {currencies.map((currency, index) => (
              <option key={ index } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Métodos de Pagamento:
          <select
            name="method"
            id="method-input"
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
            name="tag"
            id="tag-input"
            data-testid="tag-input"
          >
            {categories.map((tag, index) => (
              <option key={ index } value={ tag }>{ tag }</option>
            ))}
          </select>
        </label>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(ExpenseForm);
