import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcImg: "./img/red-car.jpg",
  };

  changeColor = (newImgSrc) => {
    this.setState({
        srcImg: newImgSrc,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <h3>Bài Tập Chọn Xe</h3>
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.srcImg} alt="123" />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  onClick={() => {
                    this.changeColor("./img/red-car.jpg");
                  }}
                >
                  Red Color
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ border: "1px solid #888" }}
                  type="button"
                  class="btn"
                  onClick={() => {
                    this.changeColor("./img/silver-car.jpg");
                  }}
                >
                  Silver Color
                </button>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  onClick={() => {
                    this.changeColor("./img/black-car.jpg");
                  }}
                >
                  Black Color
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ border: "1px solid gray" }}
                  type="button"
                  class="btn"
                  onClick={() => {
                    this.changeColor("./img/steel-car.jpg");
                  }}
                >
                  Steal Color
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
