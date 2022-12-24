import React, { Component } from "react";

import data from "../../data/DataFilms.json";

export default class BaiTapPhim extends Component {
  renderMovieList = () => {
    const content = data.map((element) => {
      return (
        <div className="col-3" key={element.maPhim}>
          {/* b4-card-default */}
          <div className="card">
            <img className="card-img-top" src={element.hinhAnh} alt="#" />
            <div className="card-body">
              <h4 className="card-title">{element.tenPhim}</h4>
              <p className="card-text">{element.moTa}</p>
              <button
                onClick={() => this.showDescription(element.moTa)}
                className="btn btn-primary"
              >
                XEM CHI TIẾT
              </button>
            </div>
          </div>
        </div>
      );
    });

    return content;
  };

  showDescription = (description) => {
    alert(description);
  };

  render() {
    // console.log(data);

    return (
      <div>
        <h3>BaiTapPhim</h3>
        <div className="row">{this.renderMovieList()}</div>
      </div>
    );
  }
}
