import React from "react";

function Input({ todoList, setTodoList, newTodo, setNewTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      const todo = {
        id: new Date().getTime().toString(),
        todo: newTodo,
        state: "active",
      };
      setTodoList((list) => {
        return [...list, todo];
      });
      localStorage.setItem("todoList", JSON.stringify([...todoList, todo]));
      setNewTodo("");
    }
  };
  return (
    <div className="todo-item" id="input">
      <form className="item-container" onSubmit={handleSubmit}>
        <input type="checkbox" className="checkbox" />
        <input
          type="text"
          name="new-todo"
          className="todo-text"
          placeholder="Create a new todo..."
          autoComplete="off"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Input;
