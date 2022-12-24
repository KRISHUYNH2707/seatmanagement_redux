import React, { Component } from "react";

import data from "../../data/DataPhones.json";
import ChiTietDienThoai from "./ChiTietDienThoai";
import DanhSachDienThoai from "./DanhSachDienThoai";
import DienThoai from "./DienThoai";
import GioHang from "./GioHang";

export default class BaiTapDienThoaiRedux extends Component {
  render() {
    return (
      <div>
        <h3>BaiTapDienThoai</h3>
        <section className="w-75 mx-auto">
          <GioHang />
          <DanhSachDienThoai />
          <ChiTietDienThoai />
        </section>
      </div>
    );
  }
}
