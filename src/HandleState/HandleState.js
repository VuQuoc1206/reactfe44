import React, { Component } from "react";

export default class HandleState extends Component {
  // state : thuộc tính có sẵn của class Component => cho phép thay đổi giá trị và render lại giao diện
  state = {
    isLogin: false,
  };
  userName = "IquBin";

  renderContent = () => {
    if (this.state.isLogin) {
      return <h1>Hello {this.userName}</h1>;
    }

    return (
      <button
        onClick={() => {
          this.login();
        }}
      >
        Đăng nhập
      </button>
    );
  };

  login = () => {
    // this.isLogin = true;
    // không gán giá trị các thuộc tính của state trực tiếp

    // const newState = {
    //   isLogin: true,
    // };

    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state.isLogin);
      }
    );
  };

  render() {
    return (
      <div>
        {/* {this.isLogin ? <h1>Hello {this.userName}</h1> :  <button>Đăng nhập</button>} */}

        {this.renderContent()}
      </div>
    );
  }
}
