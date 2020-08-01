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
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(sanPhamGH.maSP, true);
              }}
              className="btn btn-primary"
            >
              +
            </button>
            {sanPhamGH.soLuong}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(sanPhamGH.maSP, false);
              }}
              className="btn btn-primary"
            >
              -
            </button>
          </td>
          <td>{sanPhamGH.giaBan.toLocaleString()}</td>
          <td>{(sanPhamGH.soLuong * sanPhamGH.giaBan).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGH(sanPhamGH.maSP);
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
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Tổng Tiền :</td>
              <td>
                {this.props.gioHang.reduce((tongTien,spGH,index)=>{
                  return tongTien += spGH.soLuong * spGH.giaBan
                },0).toLocaleString()}
              </td>
            </tr>
          </tfoot>
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

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGH: (maSP) => {
      console.log(maSP);
      let action = {
        type: "XOA_GIO_HANG",
        maSP: maSP,
      };
      // dùng hàm dispatch của redux đưa dữ liệu lên reducer
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      dispatch({
        type: "TANG_GIAM_SO_LUONG",
        maSP: maSP,
        tangGiam: tangGiam,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
