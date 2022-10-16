import React from "react";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Todo() {
  return (
    <div className="todo-item item completed">
      <article className="item-container">
        <div className="check">
          <input type="checkbox" className="checkbox" />
          <FontAwesomeIcon icon={faCheck} className="checked" />
        </div>
        <div className="todo-text item-div">tamam</div>
        <button className="btn btn-delete-todo">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </article>
    </div>
  );
}

export default Todo;
