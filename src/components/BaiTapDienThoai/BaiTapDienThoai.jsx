import React, { Component } from "react";

import data from "../../data/DataPhones.json";
import ChiTietDienThoai from "./ChiTietDienThoai";
import DanhSachDienThoai from "./DanhSachDienThoai";
import DienThoai from "./DienThoai";
import GioHang from "./GioHang";

export default class BaiTapDienThoai extends Component {
  state = {
    phoneDetail: data[0],
    cart: [],
  };

  getPhoneDetail = (phone) => {
    this.setState({
      phoneDetail: phone,
    });
  };

  addToCart = (phone) => {
    // console.log(phone);
    // this.state.cart.push(phone);
    const data = [...this.state.cart];

    // kiếm sản phẩm đã tồn tại trong giỏ hàng chưa.
    const idx = data.findIndex((element) => element.maSP === phone.maSP);

    // idx === -1 là không có phone hiện tại khi click trong giỏ hàng
    if (idx === -1) {
      data.push({ ...phone, soLuong: 1 });
    } else {
      // đã tồn tại điện thoại trog giỏ hàng
      data[idx].soLuong += 1;
    }

    this.setState({
      cart: data,
    });
  };

  handleQuantity = (phone, isIncrease) => {
    // console.log(phone);
    // console.log(isIncrease);
    const data = [...this.state.cart];
    const idx = data.findIndex((ele) => ele.maSP === phone.maSP);

    if (isIncrease) {
      // khi click vào button +
      data[idx].soLuong += 1;
    } else {
      // khi click vào button -
      if (data[idx].soLuong > 1) {
        data[idx].soLuong -= 1;
      } else if (window.confirm("Bạn có muốn xóa không?")) {
        // khi user click vào xác nhận
        data.splice(idx, 1);
      }
    }

    this.setState({
      cart: data,
    });
  };

  handleDelete = (phone) => {
    const data = [...this.state.cart];
    const idx = data.findIndex((element) => element.maSP === phone.maSP);

    data.splice(idx, 1);

    this.setState({
      cart: data,
    });
  };

  render() {
    return (
      <div>
        <h3>BaiTapDienThoai</h3>
        <section className="w-75 mx-auto">
          <GioHang
            cart={this.state.cart}
            handleQuantity={this.handleQuantity}
            handleDelete={this.handleDelete}
          />
          <DanhSachDienThoai
            addToCart={this.addToCart}
            getPhoneDetail={this.getPhoneDetail}
          />
          <ChiTietDienThoai phoneDetail={this.state.phoneDetail} />
        </section>
      </div>
    );
  }
}
