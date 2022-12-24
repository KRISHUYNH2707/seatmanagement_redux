// rcc
import React, { Component } from "react";

// 3 cách
// Cách 1: stylesheet
// ưu điểm: dễ tiếp cận, dễ sử dụng
// nhược điểm: các file ko import vẫn sử dụng đc css
import "./style.css";

// Cách 2: module
// ưu điểm: giải quyết đc nhược điểm của cách 1
// nhược điểm: khó sử dụng
import styleModule from "./style.module.css";

// Cách 3: inline
// ưu điểm: dynamic giá trị của 1 thuộc tính css
// nhược điểm: ko tái sử dụng code

export default class Styling extends Component {
  // call api => fontSize = 30
  fontSize = 30;

  render() {
    return (
      <div>
        <h3>Styling</h3>
        <p className="cybersoft">Stylesheet</p>
        {/* object literals */}
        <p
          className={`${styleModule.bc36} ${styleModule["cybersoft-fontsize"]}`}
        >
          Module
        </p>
        <p
          style={{
            color: "red",
            backgroundColor: "black",
            fontSize: this.fontSize,
          }}
        >
          Inline
        </p>
      </div>
    );
  }
}

// document.getElementId("abc").style.backgroundColor = true;
