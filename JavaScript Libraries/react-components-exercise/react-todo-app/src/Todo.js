import React from "react";
import TodoList from "./TodoList";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      todos: [
        {
          id: 0,
          title: "Bath Milo",
          description: "My dog Milo likes baths",
        },
      ],
      count: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTodosArr = this.state.todos.slice();
    const { title, description } = this.state;
    let newTodoObj = { id: this.state.count, title, description };
    newTodosArr.push(newTodoObj);
    this.setState({
      todos: newTodosArr,
      count: this.state.count + 1,
      title: "",
      description: "",
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const arrOfNewTodos = this.state.todos.map(function (todo) {
      return (
        <TodoList
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      );
    });

    return (
      <div className="body">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <br />
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <br />
          <br />
          <label>
            Description:
            <br />
            <input
              value={this.state.description}
              onChange={this.handleChange}
              type="text"
              name="description"
            />
          </label>
          <br />
          <button className="btn" type="submit">
            Save
          </button>
        </form>
        <br />
        <div className="todo-box">
          <h3>To Do</h3>
        </div>

        <ul>{arrOfNewTodos}</ul>
      </div>
    );
  }
}

export default Todo;
