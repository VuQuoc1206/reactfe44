import React, { Component } from "react";
import DSSP from "./DSSP";
import ModalGH from "./ModalGH";

export default class BTGioHangProps extends Component {
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
    gioHang: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        hinhAnh: "./img/vsphone.jpg",
        soLuong: 1,
        gia: 1000,
      },
    ],
  };

  themGH = (sanPhamClick) => {
    // Đình nghĩa hàm thay đổi state tại nơi chứ state

    // Từ sản phẩm được click tạo ra sản phẩm giỏ hàng
    let spGioHang = {
      maSP: sanPhamClick.maSP,
      tenSP: sanPhamClick.tenSP,
      hinhAnh: sanPhamClick.hinhAnh,
      gia: sanPhamClick.giaBan,
      soLuong: 1,
    };

    // Định nghĩa hàm thay đổi state tại nơi chứa state 
    // tạo giỏ hàng mới 

    let gioHangCapNhat = [...this.state.gioHang, spGioHang];

    // cập nhật giỏ hàng cũ bằng phương thức setstate
    this.setState({ gioHang: gioHangCapNhat });
  };

  render() {
    return (
      <div>
        <DSSP themGH={this.themGH} mangSanPham={this.arrProduct} />
        <ModalGH gioHang={this.state.gioHang} />
      </div>
    );
  }
}
