import React from "react";

function Input() {
  return (
    <div className="todo-item" id="input">
      <form className="item-container">
        <input type="checkbox" className="checkbox" />
        <input
          type="text"
          name="new-todo"
          className="todo-text"
          placeholder="Create a new todo..."
          autoComplete="off"
        />
      </form>
    </div>
  );
}

export default Input;
