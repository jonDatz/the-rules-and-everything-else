import React from 'react';
// import Nav from "./components/Nav/Nav";
import Head from "../Head/Head";
import Para from "../Para/Para";
import Nav from '../Nav/Nav';

function Info() {
  return (
    <React.Fragment>
    <Head />
    <Nav />
    <Para />
    <Nav />
    <Para />
  </React.Fragment>
  );
}

export default Info;