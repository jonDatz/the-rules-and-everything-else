import React from 'react';
import Head from "../Head/Head";
import Para from "../Para/Para";
import TabNav from "../TabNav/TabNav";
import InfoNav from "../InfoNav/InfoNav";
import WCastle from "../../images/warwickcastle.jpg";
import Rock from "../../images/fantasy-rock.jpg";
import River from "../../images/river.jpg";
import guide from "../../beginners-guide.json";

function Info(props) {
  return (
    <React.Fragment>
      <div className="sidenav-spacing">
        <Head />
        <InfoNav />
        <TabNav
          targetName={'target1'}
          title1={guide[1].characterSheet[0].type}
          image1={guide[1].characterSheet[0].image}
          content1={guide[1].characterSheet[0].description}

          title2={guide[1].characterSheet[1].type}
          image2={guide[1].characterSheet[1].image}
          content2={guide[1].characterSheet[1].description}

          title3={guide[1].characterSheet[2].type}
          image3={guide[1].characterSheet[2].image}
          content3={guide[1].characterSheet[2].description}

          title4={guide[1].characterSheet[3].type}
          image4={guide[1].characterSheet[3].image}
          content4={guide[1].characterSheet[3].description}

          title5={guide[1].characterSheet[4].type}
          image5={guide[1].characterSheet[4].image}
          content5={guide[1].characterSheet[4].description}
        />
        <Para imageSource={WCastle} />
        <TabNav
          targetName={'target2'}
          title1={guide[1].characterSheet[5].type}
          image1={guide[1].characterSheet[5].image}
          content1={guide[1].characterSheet[5].description}

          title2={guide[1].characterSheet[6].type}
          image2={guide[1].characterSheet[6].image}
          content2={guide[1].characterSheet[6].description}

          title3={guide[1].characterSheet[7].type}
          image3={guide[1].characterSheet[7].image}
          content3={guide[1].characterSheet[7].description}

          title4={guide[1].characterSheet[8].type}
          image4={guide[1].characterSheet[8].image}
          content4={guide[1].characterSheet[8].description}

          title5={guide[1].characterSheet[9].type}
          image5={guide[1].characterSheet[9].image}
          content5={guide[1].characterSheet[9].description}
        />
        <Para imageSource={Rock} />
        <TabNav
          targetName={'target3'}
          tabs={4}
          title1={guide[2].characterBuilding[0].step}
          content1={guide[2].characterBuilding[0].description}

          title2={guide[2].characterBuilding[1].step}
          content2={guide[2].characterBuilding[1].description}

          title3={guide[2].characterBuilding[2].step}
          content3={guide[2].characterBuilding[2].description}

          title4={guide[2].characterBuilding[3].step}
          content4={guide[2].characterBuilding[3].description} />
        <Para imageSource={River} />
        <TabNav 
        targetName={'target4'}
        tabs={3}
        title1={guide[2].characterBuilding[4].step}
        content1={guide[2].characterBuilding[4].description}

        title2={guide[2].characterBuilding[5].step}
        content2={guide[2].characterBuilding[5].description}

        title3={guide[2].characterBuilding[6].step}
        content3={guide[2].characterBuilding[6].description}

        />
        <Para imageSource={WCastle} />
        <TabNav 
        targetName={'target5'}
        tabs={5}
        title1={guide[3].combat[0].section}
        content1={guide[3].combat[0].description}

        title2={guide[3].combat[1].section}
        content2={guide[3].combat[1].description}

        title3={guide[3].combat[2].section}
        content3={guide[3].combat[2].description}

        title4={guide[3].combat[3].section}
        content4={guide[3].combat[3].description}

        title5={guide[3].combat[4].section}
        content5={guide[3].combat[4].description}
        />
        <Para imageSource={Rock} />
      </div>
    </React.Fragment>
  );
}

export default Info;