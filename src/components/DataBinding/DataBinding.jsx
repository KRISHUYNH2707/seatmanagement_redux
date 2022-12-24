import React, { Component } from "react";

export default class DataBinding extends Component {
  productDescription = "Description ...";

  renderPrice() {
    return 3000;
  }

  renderButtons() {
    return (
      <>
        <button className="btn btn-primary">ADD TO CART</button>
        <button className="btn btn-success">VIEW</button>
      </>
    );
  }

  render() {
    const productName = "Iphone";

    // document.getElementById("header").innerHTML = productName;

    // b4-card-default
    return (
      <div className="card">
        <div className="card-body">
          <h4 id="header" className="card-title">
            {productName}
          </h4>
          <p className="card-text"> {this.productDescription} </p>
          <p>{this.renderPrice()}</p>
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}
