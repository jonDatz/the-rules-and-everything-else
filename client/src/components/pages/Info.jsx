import React from 'react';
import Head from "../Head/Head";
import Para from "../Para/Para";
import TabNav from "../TabNav/TabNav";
import WCastle from "../../images/warwickcastle.jpg";
import Rock from "../../images/fantasy-rock.jpg";
import River from "../../images/river.jpg";
import guide from "../../beginners-guide.json";

function Info(props) {
  return (
    <React.Fragment>
      <div className="sidenav-spacing">
      <Head />
        <TabNav 
          title1={guide[1].characterSheet[0].type}
          content1={guide[1].characterSheet[0].description}

          title2={guide[1].characterSheet[1].type}
          content2={guide[1].characterSheet[1].description}

          title3={guide[1].characterSheet[2].type}
          content3={guide[1].characterSheet[2].description}

          title4={guide[1].characterSheet[3].type}
          content4={guide[1].characterSheet[3].description}
        />
        <Para imageSource={WCastle} />
        <TabNav />
        <Para imageSource={Rock} />
        <TabNav />
        <Para imageSource={River} />
        <TabNav />
        <Para imageSource={WCastle} />
        <TabNav />
      </div>
    </React.Fragment>
  );
}

export default Info;