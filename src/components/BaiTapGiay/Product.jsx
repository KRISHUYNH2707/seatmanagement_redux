import React, { Component } from "react";

export default class Product extends Component {
  render() {
    // destructring object (es6) ( bóc tách phần tử )
    const { image, name, description } = this.props.element;

    return (
      <div className="card">
        <img className="card-img-top" src={image} alt="#" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{description}</p>
          <button
            onClick={() => this.props.showDescription(description)}
            className="btn btn-primary"
          >
            SHOW DESCRIPTION
          </button>
        </div>
      </div>
    );
  }
}
