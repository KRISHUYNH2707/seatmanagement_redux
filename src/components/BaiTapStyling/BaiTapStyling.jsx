// rcc

import React, { Component } from "react";

export default class BaiTapStyling extends Component {
  state = {
    fontSize: 16,
  };

  handleIncrease = () => {
    this.setState({
      fontSize: this.state.fontSize + 10,
    });
  };

  handleDecrease = () => {
    this.setState({
      fontSize: this.state.fontSize - 10,
    });
  };

  render() {
    return (
      <div>
        <h3>BaiTapStyling</h3>
        <button onClick={this.handleDecrease} className="btn btn-primary">
          DECREASE
        </button>
        <button onClick={this.handleIncrease} className="btn btn-success">
          INCREASE
        </button>
        <p style={{ fontSize: this.state.fontSize }}>Bootcamp 36</p>
      </div>
    );
  }
}
