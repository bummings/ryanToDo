import React from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Get dis money",
          id: Date.now(),
          completed: false
        }
      ],
      task: ""
    };
  }

  handleTaskChange = event => {
    this.setState({ task: event.target.value });
  };

  handleAddTodoSubmit = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.task, id: Date.now(), completed: false });
    this.setState({ todos: todos });
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
        <TodoForm
          handleAddTodo={this.handleAddTodoSubmit}
          handleTask={this.handleTaskChange}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
