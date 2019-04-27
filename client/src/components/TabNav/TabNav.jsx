import React from "react";
import { Tabs, Tab, Row, Col, Card, CardTitle } from "react-materialize";
import image from '../../images/castle.jpg';
import "./style.css";

const TabNav = props => {
  return (
    <React.Fragment>
      <div className="overRide">
        <Tabs className="tab-demo z-depth-1 overRide">
          <Tab title={props.title1} active id="tabNav">
            <div className="tabContent">
              <Row>
                <Col m={6} s={12}>
                  <Card horizontal header={<CardTitle image={image} />} actions={[<a />]}>
                    {props.content1}
                  </Card>
                </Col>
              </Row>

              {/* <p className="tabText">{props.content1}</p> */}
            </div>
          </Tab>

          <Tab title={props.title2} active id="tabNav">
            <div className="tabContent">
              <p className="tabText">{props.content2}</p>
            </div>
          </Tab>

          <Tab title={props.title3} active id="tabNav">
            <div className="tabContent">
              <p className="tabText">{props.content3}</p>
            </div>
          </Tab>

          <Tab title={props.title4} active id="tabNav">
            <div className="tabContent">
              <p className="tabText">{props.content4}</p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default TabNav;
