import React from "react";
import { Tabs, Tab, Row, Col, Card, CardTitle } from "react-materialize";
import image from '../../images/castle.jpg';
import "./style.css";

const TabNav = (props) => {
  console.log(props);
  if (props.tabs === 3 && !props.image1) {
    return (
      <React.Fragment>
        <div className="overRide" id={props.targetName}>
          <Tabs className="tab-demo z-depth-1 overRide">
            <Tab title={props.title1} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content1}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title2} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content2}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title3} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content3}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </React.Fragment >
    )
  } else if (props.tabs === 4 && !props.image1) {
    return (
      <React.Fragment>
        <div className="overRide" id={props.targetName}>
          <Tabs className="tab-demo z-depth-1 overRide">
            <Tab title={props.title1} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content1}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title2} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content2}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title3} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content3}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title4} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content4}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </React.Fragment >
    )
  } else if (props.tabs === 5 && !props.image1) {
    return (
      <React.Fragment>
        <div className="overRide" id={props.targetName}>
          <Tabs className="tab-demo z-depth-1 overRide">
            <Tab title={props.title1} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content1}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title2} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content2}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title3} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content3}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title4} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content4}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title5} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content5}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </React.Fragment >
    )
  } else {
    return (
      <React.Fragment>
        <div className="overRide" id={props.targetName}>
          <Tabs className="tab-demo z-depth-1 overRide">
            <Tab title={props.title1} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-image">
                        <img src={require(`./../../images/${props.image1}`)} />
                      </div>
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content1}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title2} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-image">
                        <img src={require(`./../../images/${props.image2}`)} />
                      </div>
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content2}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title3} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-image">
                        <img src={require(`./../../images/${props.image3}`)} />
                      </div>
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content3}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title4} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-image">
                        <img src={require(`./../../images/${props.image4}`)} />
                      </div>
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content4}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab title={props.title5} active id="tabNav">
              <div className="tabContent">
                <Row style={{ margin: 0 }}>
                  <Col s={12}>
                    <div class="card horizontal">
                      <div class="card-image">
                        <img src={require(`./../../images/${props.image5}`)} />
                      </div>
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>{props.content5}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </React.Fragment >
    );
  };
}

export default TabNav;
