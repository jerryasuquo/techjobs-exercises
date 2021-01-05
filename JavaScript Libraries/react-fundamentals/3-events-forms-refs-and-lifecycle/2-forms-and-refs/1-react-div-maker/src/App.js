import React, { Component } from "react";
import NewDivForm from "./components/NewDivForm";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divData: [],
    };
  }

  handleAdd = (newDivData) => {
    this.setState({
      divData: this.state.divData.concat(newDivData),
    });
  };

  render() {
    let divs = this.state.divData.map((div, idx) => {
      <div
        style={{
          width: div.width + "px",
          height: div.height + "px",
          backgroundColor: div.backgroundColor,
        }}
        key={idx}
      />;
    });

    return (
      <div>
        <h1>Let's make some divs!</h1>
        <NewDivForm addDiv={this.handleAdd} />
        {divs}
      </div>
    );
  }
}
