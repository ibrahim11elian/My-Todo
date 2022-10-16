import React, { useState } from "react";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// todo component and its state
function Todo({ todo, removeTodo, toggleActive }) {
  const [check, setCheck] = useState(todo.state === "active" ? false : true);

  return (
    <div
      className={
        todo.state === "completed"
          ? "todo-item item completed"
          : "todo-item item"
      }
    >
      <article className="item-container">
        <div
          className="check"
          onClick={() => {
            toggleActive(todo.id);
            setCheck(!check);
          }}
        >
          <input type="checkbox" className="checkbox" checked={check} />
          <FontAwesomeIcon icon={faCheck} className="checked" />
        </div>
        <div className="todo-text item-div">{todo.todo}</div>
        <button
          className="btn btn-delete-todo"
          onClick={() => removeTodo(todo.id)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </article>
    </div>
  );
}

export default Todo;
