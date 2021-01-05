import React, { Component } from "react";

export default class NewDivForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      backgroundColor: "#000",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addDiv(this.state);
    this.width.focus();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Width:
              <input
                type="number"
                value={this.state.width}
                onChange={this.handleChange}
                name="width"
                ref={(el) => (this.width = el)}
              />
            </label>
          </div>
          <div>
            <label>
              Height:
              <input
                type="number"
                value={this.state.height}
                onChange={this.handleChange}
                name="height"
              />
            </label>
          </div>
          <div>
            <label>
              Background Color:
              <input
                type="color"
                value={this.state.backgroundColor}
                onChange={this.handleChange}
                name="backgroundColor"
              />
            </label>
          </div>
          <input type="submit" value="Add a div" />
        </form>
      </div>
    );
  }
}
