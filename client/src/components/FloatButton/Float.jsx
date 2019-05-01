import React from "react";
import { Button } from "react-materialize";
import "./style.css";

class Float extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <Button
        floating
        large
        className="red accent-4 float-button"
        waves="light"
        icon="arrow_upward"
        onClick={() => {
          this.scrollToTop();
        }}
      />
    );
  }
}

export default Float;
