import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <li>
        {this.props.title} - {this.props.description}
      </li>
    );
  }
}
