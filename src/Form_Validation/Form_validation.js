import React, { Component } from "react";

export default class Form_validation extends Component {
  state = {
    value: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDT: "",
      maLoaiNguoiDung: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDT: "",
    },
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;

    var newValues = {
      ...this.state.values,
      [name]: value,
    };

    var newErrors = {
      ...this.state.errors,
      [name]: value.trim() === "" ? `${name} không được bỏ trống` : "",
    };

    if (type === "email") {
      let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail) {
      }
    }
    var newState = {
      values: newValues,
      errors: newErrors,
    };
    this.setState(newState, () => {});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // kiểm tra ngăn submit khi còn lỗi
    let valid = true;
    for (let key in this.state.value) {
      if (this.state.values[key] === "") {
        valid = false;
        break;
      }
    }
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("Dữ Liệu Không Hợp Lệ !!!");
      return;
    }

    alert('submit thành công')
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container-fluid">
        <div className="card text-left">
          <div className="card-header bg-dark text-light text-center">
            <h3>Form Đăng Kí</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài Khoản :</p>
                  <input
                    className="form-control"
                    name="taiKhoan"
                    onChange={this.handleChange}
                  ></input>
                  <p className="text-danger">{this.state.errors.taiKhoan}</p>
                </div>
                <div className="form-group">
                  <p>Mật Khẩu :</p>
                  <input
                    className="form-control"
                    name="matKhau"
                    onChange={this.handleChange}
                  ></input>
                  <p className="text-danger">{this.state.errors.matKhau}</p>
                </div>
                <div className="form-group">
                  <p>Email :</p>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                  ></input>
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Họ Tên :</p>
                  <input
                    className="form-control"
                    name="hoTen"
                    onChange={this.handleChange}
                  ></input>
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group">
                  <p>Số Điện Thoại</p>
                  <input
                    className="form-control"
                    name="soDT"
                    onChange={this.handleChange}
                  ></input>
                  <p className="text-danger">{this.state.errors.soDT}</p>
                </div>
                <div className="form-group">
                  <p>Mã Loại Người Dùng :</p>
                  <select
                    className="form-control"
                    name="maLoaiNguoiDung"
                    onChange={this.handleChange}
                  >
                    <option value="KhachHang">Khách Hàng</option>
                    <option value="QuanTri">Quản Trị</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="text-right col-12">
                <button className="btn btn-success">Đăng Ký</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
