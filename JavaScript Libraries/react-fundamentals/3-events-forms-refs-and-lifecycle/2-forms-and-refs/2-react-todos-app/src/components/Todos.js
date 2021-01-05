import React, { Component } from "react";
import "../styles/Todos.css";

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { completed: false };
  }

  handleComplete = () => {
    this.setState({
      completed: !this.state.completed,
    });
  };

  render() {
    let completed = this.state.completed ? "completed" : "";
    let buttonText = this.state.completed ? "incomplete" : "complete";

    return (
      <div className={`Todo ${completed}`}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <div className="button-wrapper">
          <button className="complete-button" onClick={this.handleComplete}>
            Mark as {buttonText}
          </button>
          <button className="remove-button" onClick={this.props.handleDelete}>
            Delete this todo
          </button>
        </div>
      </div>
    );
  }
}
