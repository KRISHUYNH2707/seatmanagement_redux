import React, { Component } from "react";

export default class DienThoai extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.element.hinhAnh}
          alt="#"
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.element.tenSP}</h4>
          <button
            onClick={() => this.props.getPhoneDetail(this.props.element)}
            className="btn btn-success"
          >
            XEM CHI TIẾT
          </button>
          <button
            onClick={() => this.props.addToCart(this.props.element)}
            className="btn btn-primary"
          >
            THÊM GIỎ HÀNG
          </button>
        </div>
      </div>
    );
  }
}
