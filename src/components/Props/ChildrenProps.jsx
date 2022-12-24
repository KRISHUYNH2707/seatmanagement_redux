import React, { Component } from "react";

export default class ChildrenProps extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <p>Nội dung của children props</p>
        {this.props.children}
      </div>
    );
  }
}
