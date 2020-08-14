import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class PureComponentDemo extends Component {
  state = {
    number: 1,
    user: {
      id: 1,
      name: "Tèo",
    },
  };
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>

        <button
          className="mb-5"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <h1>{this.state.user.name}</h1>
        <button
          onClick={() => {
            let newUser = this.state.user;
            newUser.name = "Nguyễn Văn A";
            this.setState({
              user: { ...newUser },
            });
          }}
        >
          New Name
        </button>
        <ChildComponent user={this.state.user} />
      </div>
    );
  }
}
