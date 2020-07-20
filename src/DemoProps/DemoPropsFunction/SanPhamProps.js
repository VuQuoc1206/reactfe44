import React, { Component } from "react";

export default class SanPhamProps extends Component {
  render() {
    let { productItem } = this.props;
    return (
      <div className="card p-3 d-flex align-items-center">
        <img
          style={{ width: "200px" }}
          className="card-img-top"
          src={productItem.hinhAnh}
          alt
        />
        <div className="card-body">
          <h4 className="card-title">{productItem.tenSP}</h4>
          <p className="card-text">{productItem.giaBan}</p>
          <button
            onClick={() => {
              this.props.xemCT(productItem);
            }}
            className="btn btn-dark"
          >
            Xem Chi Tiết
          </button>
        </div>
      </div>
    );
  }
}
