import React, { Component } from "react";

export default class SP extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div>
        <div className="card p-3 d-flex align-items-center">
          <img
            style={{ width: "200px" }}
            className="card-img-top"
            src={sanPham.hinhAnh}
            alt
          />
          <div className="card-body text-center">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
            <button className="btn btn-dark m-2">Xem Chi Tiết</button>
            <button
              onClick={() => {
                this.props.themGH(sanPham);
              }}
              className="btn btn-primary"
            >
              Thêm Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
