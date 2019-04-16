import React, { Component } from 'react';
import Snav from "./components/SNav/SNav";
import { Navbar, NavItem } from 'react-materialize';
// import Nav from "./components/Nav/Nav";
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
      renewSession();
    }
  }

  render() {
    const {isAuthenticated} = this.props.auth;

    return (
      <React.Fragment>
        <Snav />
        <div className="sidenav-spacing">
          <Navbar brand={< button />} alignLinks="right" >
            {
              !isAuthenticated() && (

                <NavItem onClick={this.login.bind(this)}>
                  Login
                        </NavItem>
              )
            }
            {
              isAuthenticated() && (
                <NavItem onClick={this.logout.bind(this)}>
                  Logout
                        </NavItem>
              )
            }
            {
              isAuthenticated() && (
                <NavItem onClick={this.goTo.bind(this, 'charactersheet')}>
                  Create a Character
                        </NavItem>
              )
            }

            <NavItem onClick={this.goTo.bind(this, 'compendium')}>Compendium</NavItem>

          </Navbar >
        </div>
      </React.Fragment>
    );
  }
}

export default App;
