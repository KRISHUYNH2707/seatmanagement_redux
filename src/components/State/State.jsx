// rcc ( react class component )

import React, { Component } from "react";

export default class State extends Component {
  //   isShowMessage = true;

  // 1 thuộc tính có sẵn của react class component
  // thường đc sử dụng khi mình muốn render lại giao diện sau khi thay đổi 1 giá trị nào đó
  state = {
    isShowMessage: true,
  };

  handleHideMessage = () => {
    // không đc phép set giá trị state trực tiếp
    // this.state.isShowMessage = false;
    // this.render();

    const newState = {
      isShowMessage: false,
    };

    // setState là function bất đồng bộ
    this.setState(newState, () => {
      console.log(this.state.isShowMessage);
    });

    // setState là đồng bộ: false
    // setState là bất động bộ: true
  };

  handleShowMessage = () => {
    // const newState = {
    //   isShowMessage: true,
    // };

    this.setState({
      isShowMessage: true,
    });
  };

  render() {
    console.log("running");

    return (
      <div>
        <h3>State</h3>
        <button onClick={this.handleHideMessage} className="btn btn-primary">
          HIDDEN
        </button>
        <button onClick={this.handleShowMessage} className="btn btn-success">
          SHOW
        </button>

        {/* {this.isShowMessage ? <p>Bootcamp 36</p> : ""} */}
        {this.state.isShowMessage && <p>Bootcamp 36</p>}
      </div>
    );
  }
}
