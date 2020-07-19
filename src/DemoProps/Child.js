import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { name, price, hinhAnh } = this.props.productProps;

    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src={hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    );
  }
}
