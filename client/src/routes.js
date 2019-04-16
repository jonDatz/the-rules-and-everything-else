import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import App from './App';
import Home from './components/pages/Home';
import Callback from './components/Callback/Callback';
import CharSheet from './components/pages/CharSheet';
import Info from './components/pages/Info'
import Auth from './Auth/Auth';
const history = require('history').createBrowserHistory();

const auth = new Auth();
console.log(auth);

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/compendium" render={(props) => <Info auth={auth} {...props} />} />
          <Route path='/charactersheet' render={(props) => (
            !auth.isAuthenticated() ? (
          <Redirect to="/home"/> 
          )
          :
          (
          <CharSheet auth={auth} {...props} />
          )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
