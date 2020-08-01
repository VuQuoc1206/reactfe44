import React, { Component } from "react";
import style from "./BaiTapGameBauCua.module.css";
import DiemThuong from "./DiemThuong";
import DanhSachCuoc from "./DanhSachCuoc";
import XucXac from "./XucXac";

export default class BaiTapGameBauCua extends Component {
  render() {
    return (
      <div className={`container-fluid ${style.gameBauCua}`}>
        <div className="display-4 text-center text-danger pt-3">
          BÀI TẬP BẦU CUA CYBESOFT
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <DiemThuong />
          </div>
          <div className="row">
            <div className="col-8">
              <DanhSachCuoc />
            </div>
            <div className="col-4">
              <XucXac />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
