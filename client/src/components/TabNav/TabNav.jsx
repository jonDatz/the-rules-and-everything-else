import React from "react";
import { Tabs, Tab } from "react-materialize";
import "./style.css";

const TabNav = () => {
  return (
    <React.Fragment>
      <div className="overRide">

        <Tabs className="tab-demo z-depth-1 overRide">

            <Tab title="Test 1" active id="tabNav">
              <div className="tabContent">
              Test 1<br />content<br />content<br />content
              </div>
            </Tab>
            <Tab title="Test 2" id="tabNav">

            <div className="tabContent">
              Test 2<br />content<br />content<br />content
              </div>
            </Tab>
            <Tab title="Test 3" id="tabNav">

            <div className="tabContent">
              Test 3<br />content<br />content<br />content
              </div>
            </Tab>
            <Tab title="Test 4" id="tabNav">

            <div className="tabContent">
              Test 4<br />content<br />content<br />content
              </div>
            </Tab>

        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default TabNav;
