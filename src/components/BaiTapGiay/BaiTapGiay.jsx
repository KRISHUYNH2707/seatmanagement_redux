import React, { Component } from "react";

import data from "../../data/DataShoes.json";
import Product from "./Product";

export default class BaiTapGiay extends Component {
  renderShoesList = () => {
    return data.map((element) => {
      return (
        <div className="col-4" key={element.id}>
          {/* b4-card-default */}

          <Product 
            element={element} 
            showDescription={this.showDescription} />
        </div>
      );
    });
  };

  showDescription = (description) => {
    alert(description);
  };

  render() {
    return (
      <div>
        <h3>BaiTapGiay</h3>
        <div className="row">{this.renderShoesList()}</div>
      </div>
    );
  }
}
