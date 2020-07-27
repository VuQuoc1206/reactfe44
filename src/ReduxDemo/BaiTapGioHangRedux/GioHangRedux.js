import React, { Component } from "react";
import { connect } from "react-redux"; // Thư viện kết nối react Component và redux store

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((sanPhamGH, index) => {
      return (
        <tr key={index}>
          <td>{sanPhamGH.maSP}</td>
          <td>{sanPhamGH.tenSP}</td>
          <td>
            <img src={sanPhamGH.hinhAnh} width="50" />
          </td>
          <td>{sanPhamGH.soLuong}</td>
          <td>{(sanPhamGH.giaBan).toLocaleString()}</td>
          <td>{(sanPhamGH.soLuong * sanPhamGH.giaBan).toLocaleString()}</td>
          <td>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="pt-5 container">
        <h3 className="text-center">Giỏ Hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình Ảnh</th>
              <th>Số Lượng</th>
              <th>Giá Bán</th>
              <th>Thành Tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}

// hàm có nhiệm vụ biến đổi state của redux trở thành props của component
const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducer.stateGioHang,
  };
};

export default connect(mapStateToProps)(GioHangRedux);
