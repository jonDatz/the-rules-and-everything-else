import React from 'react';
import Head from "../Head/Head";
import Para from "../Para/Para";
import TabNav from "../TabNav/TabNav"

function Info(props) {
  return (
    <React.Fragment>
      <div className="sidenav-spacing">
      <Head />
        <TabNav />
        <Para />
        <TabNav />
        <Para />
        <TabNav />
        <Para />
        <TabNav />
        <Para />
        <TabNav />
      </div>
    </React.Fragment>
  );
}

export default Info;