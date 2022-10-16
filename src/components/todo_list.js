import React from "react";
import Todo from "./todo";

function TodoList() {
  return (
    <div className="todo-container">
      <div className="todo-list">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
      {window.innerWidth > 575.98 ? (
        <div className="operations-bar">
          <span className="item-count">5 items left</span>
          <FilterButtons />
          <button className="btn clear">clear completed</button>
        </div>
      ) : (
        <>
          <div className="operations-bar">
            <span className="item-count">5 items left</span>
            <button className="btn clear">clear completed</button>
          </div>
          <FilterButtons />
        </>
      )}
    </div>
  );
}

const FilterButtons = () => {
  return (
    <>
      <div className="filter">
        <button className="btn active">all</button>
        <button className="btn">active</button>
        <button className="btn">completed</button>
      </div>
    </>
  );
};

export default TodoList;
