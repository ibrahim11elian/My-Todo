import React, { useState } from "react";
import Header from "./components/header";
import Input from "./components/input";
import TodoList from "./components/todo_list";
import "./sass/main.scss";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curThem) => (curThem = theme === "light" ? "dark" : "light"));
  };
  return (
    <div className="app" theme={theme}>
      <div className="container">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Input />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
