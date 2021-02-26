import React from "react";
import "./style.css";

function SearchBar() {
  return (
    <div className="d-flex justify-content-center px-5" >
      <div class="search">
        {" "}
        <input
          type="text"
          class="search-input"
          placeholder="Search Employee Name"
          name=""
        />{" "}
        <a href="#" class="search-icon">
          {" "}
          <i class="fa fa-search"></i>{" "}
        </a>{" "}
      </div>
    </div>
  );
}

export default SearchBar;
