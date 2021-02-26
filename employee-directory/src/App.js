import "./App.css";
import React, { useState, useEffect } from "react";


import API from "./utils/API";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";

function App() {
  // initialize use state as an array.
  const [employeeState, setEmployeeState] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployee, setFilteredEmployee] = useState([]);

  useEffect(() => {
    API.getEmployees().then((res) => {
      console.log(res.data.results);
      setEmployeeState(res.data.results);
    });
  }, []);



  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    console.log(event.target.value);
  };

  return (
    <div>
      <NavBar />

      <SearchBar
      handleInputChange={handleInputChange} 
      results={searchTerm} />
    
      <Table 
      users={employeeState} />
    </div>
  );
}

export default App;
