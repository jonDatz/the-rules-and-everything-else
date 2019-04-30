import React from "react";
import { Card, Col, CardTitle } from "react-materialize";

function CCard(props) {
  return (
    <React.Fragment>
      <Col s={12}>
        <Card horizontal header = {<CardTitle image={props.image} />} actions={[<a />]}>
          {props.content}
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default CCard;
