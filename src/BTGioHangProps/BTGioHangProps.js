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
    gioHang: [],
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

    let gioHangCapNhat = [...this.state.gioHang];

    let index = gioHangCapNhat.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGioHang);
    }
    // cập nhật giỏ hàng cũ bằng phương thức setstate
    this.setState({ gioHang: gioHangCapNhat });
  };

  xoaGioHang = (maSP) => {
    let gioHangCapNhap = [...this.state.gioHang];

    // setState
    console.log(maSP);

    let index = gioHangCapNhap.findIndex(
      (spGioHang) => spGioHang.maSP === maSP
    );
    if (index !== -1) {
      gioHangCapNhap.splice(index, 1);
    }
    this.setState({ gioHang: gioHangCapNhap });
  };

  tangGiamSoLuong = (maSP, tangGiam) => {
    // tangGiam = true là tăng, tangGiam = false giảm

    let gioHangCapNhap = [...this.state.gioHang];
    let index = gioHangCapNhap.findIndex ((soLuongGH) => soLuongGH.maSP === maSP);

    if (index !== -1) {
      if (tangGiam) {
        gioHangCapNhap[index].soLuong +=1
      }
      else{
        if (gioHangCapNhap[index].soLuong > 1) {
          gioHangCapNhap[index].soLuong -=1
        }
        else{
          alert("Số lượng tối thiểu là 1")
        }
      }
    }
    this.setState({gioHang : gioHangCapNhap})
  };
  render() {
    return (
      <div>
        <DSSP themGH={this.themGH} mangSanPham={this.arrProduct} />
        <ModalGH
          tangGiamSoLuong={this.tangGiamSoLuong}
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
        />
      </div>
    );
  }
}
