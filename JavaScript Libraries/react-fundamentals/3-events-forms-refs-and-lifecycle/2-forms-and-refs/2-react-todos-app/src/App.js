import React, { Component } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What's going on?</h2>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
