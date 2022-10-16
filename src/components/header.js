import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Header({ toggleTheme, theme }) {
  return (
    <header className="header">
      <h2 className="title">todo</h2>
      <span className="btn-theme" onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
      </span>
    </header>
  );
}

export default Header;
