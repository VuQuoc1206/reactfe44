import React, { Component } from "react";
import { connect } from "react-redux";

class BanCuoc extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center text-danger">
          Bài Tập Game Xúc Xắc
        </h3>
        <div className="row p-4">
          <div className="col-3">
            <button
              onClick={() => {
                this.props.dispatch({
                  type: "DAT_CUOC_XUC_XAC",
                  banChon: "TÀI",
                });
              }}
              className="bg-danger display-4 p-5 text-white"
            >
              TÀI
            </button>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center mt-5">
              {this.props.mangXucXac.map((xucXac, index) => (
                <img
                  key={index}
                  src={xucXac.hinhAnh}
                  width={50}
                  height={50}
                  className="p-1"
                />
              ))}
            </div>
          </div>
          <div className="col-3">
            <button
              className="bg-dark display-4 p-5 text-white"
              onClick={() => {
                this.props.dispatch({
                  type: "DAT_CUOC_XUC_XAC",
                  banChon: "XỈU",
                });
              }}
            >
              XỈU
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangXucXac: state.BaiTapXucXacReducer.mangXucXac,
});

export default connect(mapStateToProps)(BanCuoc);
