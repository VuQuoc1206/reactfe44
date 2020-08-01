import React, { Component } from "react";
import { connect } from "react-redux";
import styleBauCua from "./BaiTapGameBauCua.module.css";

class XucXac extends Component {
  renderXucXac = () => {
    return this.props.xucXac.map((quanLac, index) => {
      return (
        <div className={`mt-3 ${styleBauCua.animBauCua}`} key={index}>
          <img style={{ width: 50 }} src={quanLac.hinhAnh} />
        </div>
      );
    });
  };
  render() {
    let numberNN = Date.now();

  let keyframeCSS = `keyframes animBauCua ${numberNN} {
      0% {
        left: -100px;
      }
      25% {
        left: 100px;
      }
      50% {
        left: 0px;
      }
      75% {
        left: -100px;
      }
      100% {
        left: 100px;
      }
    }
    
    .xucXac {
      left: 0px;
      position: relative;
      animation: animBauCua${numberNN} 0.5s  0  linear;
    }`
    return (
      <div
        className=""
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <style>
          keyframeCSS
        </style> */}
        {this.renderXucXac()}
        <button
          onClick={() => {
            this.props.playGame();
          }}
          className="btn btn-success py-3 mt-5 px-5"
          style={{ fontSize: 25 }}
        >
          Xốc
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    xucXac: state.BaiTapGameBauCuaReducer.xucXac,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
