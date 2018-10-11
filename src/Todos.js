//todos.js only job: to take our todos and return a todo component for the list
import React from "react";
import Todo from "./Todo";

// don't need state, just gotta push out
const Todos = props => {
  return (
    <div>{props.todos.map(todo => <Todo data={todo} key={todo.id} />)}</div>
  );
};

export default Todos;
