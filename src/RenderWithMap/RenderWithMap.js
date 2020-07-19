import React, { Component } from "react";

export default class RenderWithMap extends Component {
  danhSachSanPham = [
    {
      maSP: 1,
      tenSP: "IphoneX",
      gia: 2000,
      hinhAnh: "http://picsum.photos/200/200",
    },
    {
      maSP: 2,
      tenSP: "IphoneXS",
      gia: 2000,
      hinhAnh: "http://picsum.photos/200/200",
    },
    {
      maSP: 3,
      tenSP: "Iphone11",
      gia: 2000,
      hinhAnh: "http://picsum.photos/200/200",
    },
  ];

  renderTable = () => {
    // for (let index = 0; index < this.danhSachSanPham.length; index++) {
    //   let sanPham = this.danhSachSanPham[index];
    //   let trJSX = (
    //     <tr>
    //       <td>{sanPham.maSP}</td>
    //       <td>{sanPham.tenSP}</td>
    //       <td>{sanPham.gia}</td>
    //       <td>
    //         <img
    //           src={sanPham.hinhAnh}
    //           alt={sanPham.hinhAnh}
    //           width={100}
    //           height={100}
    //         />
    //       </td>
    //       <td>
    //         <button className="btn btn-danger">Xóa</button>
    //       </td>
    //     </tr>
    //   );

    //   arrSPJXS.push(trJSX);
    // }
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>{sanPham.gia}</td>
          <td>
            <img
              src={sanPham.hinhAnh}
              alt={sanPham.hinhAnh}
              width={100}
              height={100}
            />
          </td>
          <td>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-primary text-center">Danh mục sản phẩm</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã Sản Phẩm</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá Sản Phẩm</th>
              <th>Hình Ảnh</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
