import React from 'react';
// import Nav from "./components/Nav/Nav";
import Head from "../Head/Head";
import Para from "../Para/Para";
import Nav from '../Nav/Nav';
import TabNav from "../TabNav/TabNav"

function Info(props) {
  return (
    <React.Fragment>
      <div className="sidenav-spacing">
        <Head />
        <TabNav />
        <Para />
        <Para />
      </div>
    </React.Fragment>
  );
}

export default Info;