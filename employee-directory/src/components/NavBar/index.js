import React from "react";
import "./style.css";

function NavBar() {
  return (
    <div className = "parent">
      <nav className="navbar">
        <ul >
          <li> Employee Directory</li>
          <li> Search an employee to filter through table</li>
          <li>
           Click on Name tab to sort employees
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
