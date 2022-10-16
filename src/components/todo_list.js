import React from "react";
import Todo from "./todo";

function TodoList({
  todoList,
  removeTodo,
  toggleActive,
  filter,
  removeCompleted,
}) {
  return (
    <div className="todo-container">
      <div className="todo-list">
        {todoList.map((item) => {
          return (
            <Todo
              key={item.id}
              todo={item}
              removeTodo={removeTodo}
              toggleActive={toggleActive}
            />
          );
        })}
      </div>

      {window.innerWidth > 575.98 ? (
        <div className="operations-bar">
          <span className="item-count">{todoList.length} items left</span>
          <FilterButtons filter={filter} />
          <button className="btn clear" onClick={removeCompleted}>
            clear completed
          </button>
        </div>
      ) : (
        <>
          <div className="operations-bar">
            <span className="item-count">{todoList.length} items left</span>
            <button className="btn clear" onClick={removeCompleted}>
              clear completed
            </button>
          </div>
          <FilterButtons filter={filter} />
        </>
      )}
    </div>
  );
}

const FilterButtons = ({ filter }) => {
  return (
    <>
      <div className="filter">
        <button className="btn active" onClick={filter}>
          all
        </button>
        <button className="btn" onClick={filter}>
          active
        </button>
        <button className="btn" onClick={filter}>
          completed
        </button>
      </div>
    </>
  );
};

export default TodoList;
