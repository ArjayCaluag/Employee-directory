import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <div className="d-flex justify-content-center px-5" >
      <div className="search">
        
        <input
          value = {props.searchTerm}
          onChange = {props.handleInputChange}
          type="search"
          className="search-input"
          placeholder="Search Employee Name"
          
        />
      </div>
    </div>
  );
}


export default SearchBar;
