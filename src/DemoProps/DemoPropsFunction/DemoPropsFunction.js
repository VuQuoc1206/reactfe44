import React, { Component } from "react";
import SanPhamProps from "./SanPhamProps";

export default class DemoPropsFunction extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    sanPhamChiTiet: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
  };

  xemChiTiet = (spClick) => {
    // set state của sản phẩm chi tiết để render lại giao diện
    this.setState({
      sanPhamChiTiet: spClick,
    });
  };

  renderSanPham = () => {
    return this.arrProduct.map((productItem, index) => {
      return (
        <div key={index} className="col-4">
          <SanPhamProps productItem = {productItem} xemCT = {this.xemChiTiet}/>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3 className="text-center text-danger p-5">Danh Sách Sản Phẩm</h3>
          <div className="row">{this.renderSanPham()}</div>

          <div className="row m-5">
            <div className="col-4 text-center">
              <h3>{this.state.sanPhamChiTiet.tenSP}</h3>
              <img
                src={this.state.sanPhamChiTiet.hinhAnh}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-8">
              <h3>Thông Số Kỹ Thuật</h3>
              <table className="table mt-5">
                <tbody>
                  <tr>
                    <td>Màn Hình</td>
                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ Điều Hành</td>
                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera Trước</td>
                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera Sau</td>
                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>Ram</td>
                    <td>{this.state.sanPhamChiTiet.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.sanPhamChiTiet.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
