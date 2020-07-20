import React, { Component } from "react";
import SP from "./SP";

export default class DSSP extends Component {
  renderSanPham = () => {
    let { mangSanPham } = this.props;
    return mangSanPham.map((sanPham, index) => {
      return (
        <div key={index} className="col-4">
          <SP themGH = {this.props.themGH} sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3 className="text-center text-danger">Danh Sách Sản Phẩm</h3>
          <div className="row m-5">{this.renderSanPham()}</div>
        </div>
      </div>
    );
  }
}
