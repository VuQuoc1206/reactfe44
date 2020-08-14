import React, { Component } from "react";
import { connect } from "react-redux";
class KetQua extends Component {
  render() {
    return (
      <div className="container display-4 text-center">
        <div>
          Bạn Chọn: <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div>
          Số Bàn Chơi:{" "}
          <span className="text-success">{this.props.soBanChoi}</span>
        </div>
        <div>
          Tổng Số Bàn Thắng:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <button
          onClick={() => {
            var number = 0;

            let randomXiNgau = setInterval(() => {
              number += 1;
              this.props.dispatch({
                type: "RANDOM_XUC_XAC",
              });
              if (number > 10) {
                clearInterval(randomXiNgau);
                this.props.dispatch({
                  type: "TINH_DIEM",
                });
              }
            }, 100);
          }}
          className="btn btn-success"
          style={{ fontSize: 30 }}
        >
          Play Game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  soBanThang: state.BaiTapXucXacReducer.soBanThang,
  soBanChoi: state.BaiTapXucXacReducer.soBanChoi,
  banChon: state.BaiTapXucXacReducer.banChon,
});

export default connect(mapStateToProps)(KetQua);
