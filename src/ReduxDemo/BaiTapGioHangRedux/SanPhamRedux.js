import React, { Component } from "react";
import {connect} from 'react-redux';

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div>
        <div className="card p-3 d-flex align-items-center">
          <img
            height={350}
            className="card-img-top"
            src={sanPham.hinhAnh}
            alt
          />
          <div className="card-body text-center">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
            <button onClick={() => {
                this.props.themGH(sanPham)
            }} className="btn btn-primary">Thêm Giỏ Hàng</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themGH : (sanPhamClick) => {
            let spGH =  {
                maSP : sanPhamClick.maSP,
                tenSP : sanPhamClick.tenSP,
                hinhAnh : sanPhamClick.hinhAnh,
                soLuong : 1,
                giaBan : sanPhamClick.giaBan,
            }
            let action = {
                type : 'Them_Gio_Hang', // thuộc tính bắt buộc phải có
                spGH : spGH
            }

            dispatch(action)
        }
    }
}
export default connect (null,mapDispatchToProps)(SanPhamRedux)