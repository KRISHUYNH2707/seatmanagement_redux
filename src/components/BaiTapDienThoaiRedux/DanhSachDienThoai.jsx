import React, { Component } from "react";
import data from "../../data/DataPhones.json";
import DienThoai from "./DienThoai";

export default class DanhSachDienThoai extends Component {
  renderPhoneList = () => {
    return data.map((element) => {
      return (
        <div className="col-4" key={element.maSP}>
          <DienThoai element={element} />
        </div>
      );
    });
  };

  render() {
    return <div className="row mt-3">{this.renderPhoneList()}</div>;
  }
}
