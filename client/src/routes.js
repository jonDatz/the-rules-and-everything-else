import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import App from './App';
import Home from './components/pages/Home';
import Callback from './components/Callback/Callback';
import CharSheet from './components/pages/CharSheet';
import Info from './components/pages/Info'
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/compendium" render={(props) => <Info auth={auth} {...props} />} />
        <Route path='/charactersheet' render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="/" />
          )
            :
            (
              <CharSheet auth={auth} {...props} />
            )
        )} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />
      </div>
    </Router>
  );
}
