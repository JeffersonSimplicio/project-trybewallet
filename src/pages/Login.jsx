import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addUser from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.getValue = this.getValue.bind(this);
    this.dataValidation = this.dataValidation.bind(this);
    this.submitUserData = this.submitUserData.bind(this);
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };
  }

  getValue({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    },
    this.dataValidation);
  }

  dataValidation() {
    const { email, password } = this.state;
    const limitPassword = 6;
    if (password.length >= limitPassword
      && email.includes('@')
      && email.includes('.com')) {
      this.setState({
        disabledButton: false,
      });
    } else {
      this.setState({
        disabledButton: true,
      });
    }
  }

  submitUserData() {
    console.log('Entrou no enviar');
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(addUser(email));
    history.push('/carteira');
  }

  render() {
    const {
      email,
      password,
      disabledButton,
    } = this.state;

    return (
      <>
        <label htmlFor="input-email">
          Email:
          <input
            type="email"
            id="input-email"
            name="email"
            value={ email }
            onChange={ this.getValue }
            data-testid="email-input"
          />
        </label>

        <label htmlFor="input-password">
          Senha:
          <input
            type="password"
            id="input-password"
            name="password"
            value={ password }
            onChange={ this.getValue }
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          disabled={ disabledButton }
          onClick={ this.submitUserData }
        >
          Entrar
        </button>
      </>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
