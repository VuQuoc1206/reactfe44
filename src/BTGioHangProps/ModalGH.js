import React, { Component } from "react";

export default class ModalGH extends Component {
  renderGioHang = () => {
    let { gioHang } = this.props;
    return gioHang.map((sanPhamGH, index) => {
      return (
        <tr key={index}>
          <td>{sanPhamGH.maSP}</td>
          <td>{sanPhamGH.tenSP}</td>
          <td>
            <img src={sanPhamGH.hinhAnh} width="50" />
          </td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.tangGiamSoLuong(sanPhamGH.maSP, true);
              }}
            >
              +
            </button>

            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.tangGiamSoLuong(sanPhamGH.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>{sanPhamGH.soLuong}</td>
          <td>{sanPhamGH.gia.toLocaleString()}</td>
          <td>{(sanPhamGH.soLuong * sanPhamGH.gia).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(sanPhamGH.maSP);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  tinhTongTien = () => {
    return this.props.gioHang.reduce((tongTien, spGH, index) => {
      return (tongTien += spGH.soLuong * spGH.gia);
    }, 0);
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center pb-5">Giỏ Hàng</h3>
        <table className="table">
          <thead>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Hình Ảnh</th>
            <th>Số Lượng</th>
            <th>Đơn Giá</th>
            <th>Thành Tiền</th>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Tổng Tiền</td>
              <td>{this.tinhTongTien().toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
