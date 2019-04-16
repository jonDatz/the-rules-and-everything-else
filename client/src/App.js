import React, { Component } from 'react';
import Snav from "./components/SNav/SNav";
import Nav from "./components/Nav/Nav";
import './App.css';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
        <React.Fragment>
          <Snav />
          <div className="sidenav-spacing">
          <Nav auth={this.props.auth} {...this.props}/>
          </div>
        </React.Fragment>
    );
  }
}

export default App;
