import React, { useState } from "react";
import Header from "./components/header";
import Input from "./components/input";
import TodoList from "./components/todo_list";
import "./sass/main.scss";

function App() {
  // theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // todo state
  const [newTodo, setNewTodo] = useState("");
  // todo list state default value comes from local storage if not then its empty list
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  // remove todo from list, update the local storage
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setTodoList([...newTodoList]);
  };

  // remove all todo that have state completed
  const removeCompleted = () => {
    const newTodoList = todoList.filter((item) => item.state !== "completed");
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setTodoList([...newTodoList]);
  };

  // filter all the list based on preferred state
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

  // toggle the todo state based on clicked button
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

  // toggle theme, save it to local storage
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
