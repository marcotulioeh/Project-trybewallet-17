import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { insertEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };
  }

  emailVerify = () => {
    const { email, password } = this.state;
    const min = 5;
    const ruleToEnable = !(/[\w]+@+[\w]+.com/.test(email) && password.length >= min);
    this.setState({ disabled: ruleToEnable });
  };

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.emailVerify());
  };

  onClick = (e) => {
    const { email } = this.state;
    const { login } = this.props;
    e.preventDefault();
    login(email);
    this.setState({ redirect: true });
  };

  render() {
    const { email, password, disabled, redirect } = this.state;
    const { onChange, onClick } = this;
    return (
      <section>
        <Input
          type="email"
          name="email"
          value={ email }
          placeholder="Email"
          onChange={ onChange }
          dataTestId="email-input"
        />
        <Input
          type="password"
          name="password"
          value={ password }
          placeholder="Senha"
          onChange={ onChange }
          dataTestId="password-input"
        />
        <button type="submit" onClick={ onClick } disabled={ disabled }>
          Entrar
        </button>
        { redirect && <Redirect to="/carteira" /> }
      </section>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(insertEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
