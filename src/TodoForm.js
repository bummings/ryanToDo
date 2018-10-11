import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input placeholder="gimme a task" onChange={props.handleTask} />
      <button onClick={props.handleAddTodo}>Add todo</button>
    </form>
  );
};

export default TodoForm;
