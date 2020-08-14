import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  
  render() {
    console.log(1);
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <nav className="nav justify-content-center bg-dark">
          <a className="nav-link active text-white" href="#">
            Active link
          </a>
          <a className="nav-link text-white" href="#">
            Link
          </a>
          <a className="nav-link disabled " href="#">
            Disabled link
          </a>
        </nav>
      </div>
    );
  }
}
