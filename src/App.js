import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import LoginPage from './pages/Login.js';
import UserRegisterPage from './pages/User-register.js';
import Page from './pages/404.js';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/userregister">
            <UserRegisterPage />
          </Route>
          <Route exact path="/404">
            <Page />
          </Route>
        </Switch>
    </Router>
  );
}
