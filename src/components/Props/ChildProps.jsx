import React, { Component } from "react";

export default class ChildProps extends Component {
  // props là 1 thuộc tính có sẵn của component
  // dùng giao tiếp giữa component cha và con ( truyền dữ liệu giữa các component )
  // dynamic dữ liệu truyền vào từ component cha

  render() {
    console.log(this.props);

    // không thể thay đổi giá trị props mà chỉ có thể sử dụng nó
    // this.props.name = "Xiaomi";

    return (
      <div className="w-50 mx-auto border p-3 bg-light">
        <img width={300} src={this.props.imageUrl} />
        <h2>{this.props.name}</h2>
        <p>{this.props.productDetail.price}</p>
        <button
          onClick={() => this.props.showName(this.props.name)}
          className="btn btn-primary"
        >
          SHOW NAME
        </button>
      </div>
    );
  }
}
