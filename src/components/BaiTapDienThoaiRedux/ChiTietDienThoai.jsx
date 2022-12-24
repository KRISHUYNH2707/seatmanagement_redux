import React, { Component } from "react";

import { connect } from "react-redux";

class ChiTietDienThoai extends Component {
  render() {
    return (
      <div className="row mt-4">
        <div className="col-4 text-center">
          <h2>{this.props.phoneDetail.tenSP}</h2>
          <img className="img-fluid" src={this.props.phoneDetail.hinhAnh} />
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <td colSpan={2}>
                  <h1>Thông số kĩ thuật</h1>
                </td>
              </tr>
              <tr>
                <td>Màn hình</td>
                <td>{this.props.phoneDetail.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{this.props.phoneDetail.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{this.props.phoneDetail.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{this.props.phoneDetail.cameraSau}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{this.props.phoneDetail.rom}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{this.props.phoneDetail.ram}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phoneDetail: state.phoneReducer.phoneDetail,
  };
};

export default connect(mapStateToProps)(ChiTietDienThoai);
