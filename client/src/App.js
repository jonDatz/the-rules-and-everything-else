import React, { Component } from 'react';
import Snav from "./components/SNav/SNav";
import Profile from './components/Profile/Profile';
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
    const {accessToken} = this.props.auth;
    console.log(accessToken);
    if (accessToken) {
      console.log('hey I ran')
      this.setState({ profile: {} });
      const { userProfile, getProfile } = this.props.auth;
      if (!userProfile) {
        getProfile((err, profile) => {
          console.log(profile)
          this.setState({ profile });
        });
      } else {
        this.setState({ profile: userProfile });
      }
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <React.Fragment>
        <Snav auth={this.props.auth} {...this.props} />
        <div className="sidenav-spacing">
          {/* {isAuthenticated() && (<p>{this.state.profile}</p>)} */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
