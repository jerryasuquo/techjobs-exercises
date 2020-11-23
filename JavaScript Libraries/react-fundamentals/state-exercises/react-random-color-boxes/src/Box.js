import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  render() {
    const style = {
      backgroundColor: this.props.color,
    };
    return (
      <div
        onClick={this.props.handleClick}
        className="box-style"
        style={style}
      ></div>
    );
  }
}
