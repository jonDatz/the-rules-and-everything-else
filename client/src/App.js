import React, { Component } from 'react';
// import Nav from "./components/Nav/Nav";
import SNav from "./components/SNav/SNav";
import Para from "./components/Para/Para";
import './App.css';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SNav />
         <Nav />
         <Para />
         <Nav />
         <Para />
       </React.Fragment>
    );
  }
}

export default App;
