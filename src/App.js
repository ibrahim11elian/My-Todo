import React, { useState } from "react";
import Header from "./components/header";
import Input from "./components/input";
import TodoList from "./components/todo_list";
import "./sass/main.scss";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setTodoList([...newTodoList]);
  };

  const removeCompleted = () => {
    const newTodoList = todoList.filter((item) => item.state !== "completed");
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setTodoList([...newTodoList]);
  };

  const toggleActive = (id) => {
    todoList.forEach((item) => {
      if (item.id === id) {
        if (item.state === "active") {
          item.state = "completed";
        } else {
          item.state = "active";
        }
      }
      localStorage.setItem("todoList", JSON.stringify(todoList));
      setTodoList([...todoList]);
    });
  };

  const filter = (e) => {
    const state = e.target.textContent;
    const allButtons = document.querySelectorAll(".filter .btn");
    allButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");
    if (state !== "all") {
      const newTodoList = JSON.parse(localStorage.getItem("todoList")).filter(
        (item) => item.state === state
      );
      setTodoList([...newTodoList]);
    } else {
      setTodoList(JSON.parse(localStorage.getItem("todoList")));
    }
  };

  const toggleTheme = () => {
    setTheme((curThem) => (curThem = theme === "light" ? "dark" : "light"));
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="app" theme={theme}>
      <div className="container">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Input
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <TodoList
          todoList={todoList}
          removeTodo={removeTodo}
          toggleActive={toggleActive}
          filter={filter}
          removeCompleted={removeCompleted}
        />
      </div>
    </div>
  );
}

export default App;
