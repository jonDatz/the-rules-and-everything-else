import auth0 from 'auth0-js';
import history from '../history';
// import {AUTH_CONFIG} from './auth0-variables';

export default class Auth {
    accessToken;
    idToken;
    expiresAt;
    userProfile;

    // localhost version
  // auth0 = new auth0.WebAuth({
  //   domain: AUTH_CONFIG.domain,
  //   clientID: AUTH_CONFIG.clientId,
  //   redirectUri: AUTH_CONFIG.callbackUrl,
  //   responseType: 'token id_token',
  //   scope: 'openid profile'
  // });

  // heroku version
  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_domain,
    clientID: process.env.REACT_APP_clientId,
    redirectUri: process.env.REACT_APP_callbackUrl,
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    this.auth0.authorize()
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log('handle went to setSession');
        this.setSession(authResult);
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    console.log('set session ran');
    console.log(history);
    // navigate to the home route
    history.replace('/');
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         console.log('renew Ran to set');
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  getProfile(cb) {
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    this.userProfile = null;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    this.auth0.logout({
      return_to: 'https://the-rules-and-everything-else.herokuapp.com/'
    });

    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    console.log('authentication ran');
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}