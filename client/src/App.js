import React, { Component } from 'react';
import Snav from "./components/SNav/SNav";
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  };

  login() {
    this.props.auth.login();
  };

  logout() {
    this.props.auth.logout();
  };

  componentDidMount() {
    console.log('app mounted')

    const { renewSession } = this.props.auth;
    console.log(renewSession);

    if (localStorage.getItem('isLoggedIn') === 'true') {
      console.log('mount ran to renew');
      renewSession()
    }
  }

  render() {
    return (
      <React.Fragment>
        <Snav auth={this.props.auth} {...this.props} />
        <div className="sidenav-spacing">
        </div>
      </React.Fragment>
    );
  }
}

export default App;
