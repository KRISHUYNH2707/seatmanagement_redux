import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleRegister() {
    alert("Đăng ký thành công");
  }

  handleLogout(name) {
    alert(`${name} đã đăng xuất.`);
  }

  render() {
    return (
      <div>
        <h3>HandleEvent</h3>
        {/* sự kiện có tham số */}
        <button
          onClick={() => this.handleLogout("Cybersoft")}
          className="btn btn-danger"
        >
          LOGOUT
        </button>

        {/* sự kiện ko có tham số */}
        <button
          onClick={() => {
            alert("Đăng nhập thành công");
          }}
          className="btn btn-success"
        >
          LOGIN
        </button>

        <button onClick={this.handleRegister} className="btn btn-primary">
          REGISTER
        </button>
      </div>
    );
  }
}
