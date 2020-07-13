import React, { Component } from "react";

export default class EventBinding extends Component {
  handleClick = () => {
    alert("Hello FE44");
  };
  showMessage = (message) => {
    alert("Hello" + message);
  };
  render() {
    return (
      <div>
        <h3>Cách 1</h3>
        {/* Cách 1 : truyền trực tiếp callback function */}
        <button onClick={this.handleClick}>Click me it !</button>
        <button onClick={this.showMessage.bind(this, " Chi")}>
          Click show message !
        </button>
        {/* Cách 2 : truyền function gián tiếp  */}
        <br />
        <h3>Cách 2 </h3>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Click me it !
        </button>
        <button
          onClick={() => {
            this.showMessage(" Quốc");
          }}
        >
          Show Message Có Tham Số
        </button>
      </div>
    );
  }
}
