import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import styled from 'styled-components';
import InputLogin from '../components/InputLogin';
import { insertEmail } from '../actions';
import { SectionBody, DivStyle, FormStyle, ButtonStyle } from '../Style';

// const SectionBody = styled.section`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   min-height: 100vh;
//   background: #2f363e;
// `;

// const DivStyle = styled.div`
//   position: relative;
//   width: 350px;
//   min-height: 250px;
//   aling-items: center;
//   background: #2f363e;
//   box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.25),
//   10px 10px 70px rgba(0, 0, 0, 0.25),
//   inset 5px 5px 10px rgba(0, 0, 0, 0.5),
//   inset 5px 5px 20px rgba(255, 255, 255, 0.2),
//   inset -5px -5px 15px rgba(0, 0, 0, 0.75);
//   border-radius: 30px;
//   padding: 50px;
// `;

// const FormStyle = styled.form`
//   position: relative;
//   width: 100%;
// `;

// const ButtonStyle = styled.button`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   width: 97%;
//   border: none;
//   outline: none;
//   padding: 20px;
//   padding-left: 5px;
//   border-radius: 30px;
//   margin: 20px;
//   margin-left: 5px;
//   background: #1f83f2;
//   box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25),
//   inset 2px 2px 5px rgba(255, 255, 255, 0.35),
//   inset -3px -3px 5px rgba(0, 0, 0, 0.5);
//   color: #fff;
//   cursor: pointer;
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   font-weight: 600;
//   margin-top: 10px;
//   :hover {
//     filter: brightness(1.1);
//   }
// `;

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
      <SectionBody>
        <DivStyle>
          <FormStyle>
            <InputLogin
              type="email"
              name="email"
              value={ email }
              placeholder="Email"
              onChange={ onChange }
              dataTestId="email-input"
            />
            <InputLogin
              type="password"
              name="password"
              value={ password }
              placeholder="Senha"
              onChange={ onChange }
              dataTestId="password-input"
            />
            <ButtonStyle type="submit" onClick={ onClick } disabled={ disabled }>
              Entrar
            </ButtonStyle>
            { redirect && <Redirect to="/carteira" /> }
          </FormStyle>
        </DivStyle>
      </SectionBody>
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
