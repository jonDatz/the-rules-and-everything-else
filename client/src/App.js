import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import CharSheet from "./components/pages/CharSheet";
import Info from "./components/pages/Info";
import Snav from "./components/SNav/SNav";
import Nav from "./components/Nav/Nav";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Snav />
          <div className="sidenav-spacing">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/charactersheet" component={CharSheet} />
            <Route exact path="/compendium" component={Info} />
          </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
