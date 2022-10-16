import React from "react";

function Input({ todoList, setTodoList, newTodo, setNewTodo }) {
  // add the new todo to the list then add the list to local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    // checking if the todo have text or not
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
