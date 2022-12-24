import React, { Component } from "react";
import Child from "./Child";

import { connect } from "react-redux";

class Parent extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h3>Demo Redux</h3>
        <p>Count: {this.props.countRedux}</p>
        <Child />
      </div>
    );
  }
}

// const connect = () => {
//   return () => {};
// };

// lấy state từ trên store chuyển thành props của component
const mapStateToProps = (state) => {
  return {
    countRedux: state.countReducer.count,
  };
};

// hàm connect trả 1 component mới
const parentReduxComponent = connect(mapStateToProps)(Parent);

export default parentReduxComponent;
