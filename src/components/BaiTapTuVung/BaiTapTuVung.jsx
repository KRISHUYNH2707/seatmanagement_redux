import React, { Component } from "react";
import Content from "./Content";
import Form from "./Form";

import "./style.css";

export default class BaiTapTuVung extends Component {
  render() {
    return (
      <div className="mt-5 p-3 ml-5 border" style={{ width: 350, height: 580 }}>
        <Form />
        <Content />
      </div>
    );
  }
}
