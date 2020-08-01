import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachCuoc extends Component {
  renderDanhSachCuoc = () => {
    return this.props.danhSachCuoc.map((quanCuoc, index) => {
      return (
        <div className="col-4 p-2" key={index}>
          <img src={quanCuoc.hinhAnh} className="mb-3" />
          <span
            className="px-5 m-2 bg-warning"
            style={{ borderRadius: "5%", fontSize: 25 }}
          >
            Cược:
            <button
              onClick={() => {
                this.props.datCuoc(quanCuoc.ma, true);
              }}
              className="btn btn-success mx-2"
              style={{ fontSize: 20 }}
            >
              +
            </button>
            <span className="text-success">{quanCuoc.diemCuoc}</span>
            <button
              onClick={() => {
                this.props.datCuoc(quanCuoc.ma, false);
              }}
              className="btn btn-success mx-2"
              style={{ fontSize: 20 }}
            >
              -
            </button>
          </span>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="row text-left mt-5 pl-5">{this.renderDanhSachCuoc()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachCuoc: state.BaiTapGameBauCuaReducer.danhSachCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maQuanCuoc, tangGiam) => {
      console.log("Mã Quân Cược", maQuanCuoc);
      console.log("TangGiam", tangGiam);
      dispatch({
        type: "DAT_CUOC",
        ma: maQuanCuoc,
        tangGiam,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);
