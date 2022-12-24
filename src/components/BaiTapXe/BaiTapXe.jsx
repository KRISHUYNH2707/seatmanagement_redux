import React, { Component } from "react";

export default class BaiTapXe extends Component {
  state = {
    imageUrl: "./images/products/black-car.jpg",
  };

  //   handleChangeRedCar = () => {
  //     this.setState({
  //       imageUrl: "./images/products/red-car.jpg",
  //     });
  //   };

  //   handleChangeSilverCar = () => {
  //     this.setState({
  //       imageUrl: "./images/products/silver-car.jpg",
  //     });
  //   };

  handleChangeCar = (color) => {
    this.setState({
      imageUrl: `./images/products/${color}-car.jpg`,
    });
  };

  render() {
    return (
      <div>
        <h3 className="cybersoft">BaiTapXe</h3>
        <div className="row">
          <div className="col-7">
            {/* đường dẫn hình sẽ trỏ từ file index.html */}
            <img className="img-fluid" src={this.state.imageUrl} />
          </div>
          <div className="col-5">
            <div className="d-flex align-items-center border p-3">
              <img
                src="./images/icons/icon-black.jpg"
                width={100}
                onClick={() => this.handleChangeCar("black")}
              />
              <p className="ml-2 mb-0">Black</p>
            </div>
            <div className="d-flex align-items-center border p-3">
              <img
                src="./images/icons/icon-steel.jpg"
                width={100}
                onClick={() => this.handleChangeCar("steel")}
              />
              <p className="ml-2 mb-0">Steel</p>
            </div>
            <div className="d-flex align-items-center border p-3">
              <img
                src="./images/icons/icon-silver.jpg"
                width={100}
                onClick={() => this.handleChangeCar("silver")}
              />
              <p className="ml-2 mb-0">Silver</p>
            </div>
            <div className="d-flex align-items-center border p-3">
              <img
                src="./images/icons/icon-red.jpg"
                width={100}
                onClick={() => this.handleChangeCar("red")}
              />
              <p className="ml-2 mb-0">Red</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
