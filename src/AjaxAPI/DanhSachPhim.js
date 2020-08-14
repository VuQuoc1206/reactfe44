import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { layDanhSachPhim } from "../redux/actions/types/QuanLyType";
import { layDanhSachPhimAction } from "../redux/actions/QuanLyPhimAction";

class DanhSachPhim extends Component {
  //   state = {
  //     danhSachPhim: [],
  //   };

  renderDanhSachPhim = () => {
    console.log("danhSachPhim", this.props.danhSachPhim);

    return this.props.danhSachPhim.map((danhSachPhim, index) => {
      return (
        <div key={index} className="col-4 pt-5">
          <div className="card text-left">
            <img
              className="card-img-top"
              src={danhSachPhim.hinhAnh}
              style={{ width: "100%" }}
              height="300"
            />
            <div className="card-body">
              <h4 className="card-title">{danhSachPhim.tenPhim}</h4>
              <p className="card-text">Body</p>
            </div>
          </div>
        </div>
      );
    });
  };

  // đây là lifecycle dùng để gọi ajax api
  componentDidMount() {
    // axios({
    //   url:
    //     "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    // })
    //   .then((result) => {
    //     console.log("dataPhim", result.data);
    //     // sau khi gọi api lấy được data gắn vào state ban đầu là danhSachPhim : []
    //     this.setState({
    //       danhSachPhim: result.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //   });
    this.props.dispatch(layDanhSachPhimAction());
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center display-4">Danh Sách Phim</h3>
        <div className="row">{this.renderDanhSachPhim()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  danhSachPhim: state.QuanLyPhimReducer.danhSachPhim,
});

export default connect(mapStateToProps, null)(DanhSachPhim);
