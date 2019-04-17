import React from "react";
import { Tabs, Tab } from "react-materialize";
import "./style.css";

const TabNav = () => {
  return (
    <Tabs className="tab-demo z-depth-1">

        <Tab title="Test 1" active id="tabNav">
        Test 1<br />content<br />content<br />content
        </Tab>
        <Tab title="Test 2" id="tabNav">
        Test 2
        </Tab>
        <Tab title="Test 3" id="tabNav">
        Test 3
        </Tab>
        <Tab title="Test 4" id="tabNav">
        Test 4
        </Tab>

    </Tabs>
  );
};

export default TabNav;
