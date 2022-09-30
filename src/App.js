import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-size: border-box;
      font-family: 'Poppins', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>

    </>
  );
}

export default App;
