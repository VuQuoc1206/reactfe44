import React, { Component } from "react";

export default class BanCuoc extends Component {
  render() {
    return (
      <div className="container">
          <h3 className="display-4 text-center text-danger">Bài Tập Game Xúc Xắc</h3>
        <div className="row">
            <div className="col-4">
                <button className="bg-danger display-4 p-5 text-white">TÀI</button>
            </div>
            <div className="col-4">
                <img src="./img/1.png" width='50'/>
                <img src="./img/1.png" width='50' className="m-5"/>
                <img src="./img/1.png" width='50'/>
            </div>
            <div className="col-4">
                <button className="bg-dark display-4 p-5 text-white">TÀI</button>
            </div>
        </div>
      </div>
    );
  }
}
