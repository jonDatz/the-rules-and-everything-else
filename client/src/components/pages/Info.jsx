import React from 'react';
// import Nav from "./components/Nav/Nav";
import SNav from "../SNav/SNav";
import Para from "../Para/Para";
import './App.css';
import Nav from '../Nav/Nav';

function Info() {
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

export default Info;