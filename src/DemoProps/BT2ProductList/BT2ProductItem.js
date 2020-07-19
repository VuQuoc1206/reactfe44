import React, { Component } from "react";

export default class BT2ProductItem extends Component {
  render() {
    let { productItem } = this.props;
    return (
      <div className="card text-center">
        <img className="card-img-top" src={productItem.image} alt />
        <div
          className="card-body"
          style={{ height: "200px", fontSize: 18, fontWeight: "bold" }}
        >
          <h4 className="card-title" style={{ height: "50px" }}>
            {productItem.name}
          </h4>
          <p className="card-text" style={{ height: "50px" }}>
            {productItem.price}
          </p>
          <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>
    );
  }
}
