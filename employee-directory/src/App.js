import "./App.css";
import React, { useState, useEffect } from "react";


import API from "./utils/API";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";

function App() {
  // initialize use state as an array.
  const [employeeState, setEmployeeState] = useState([]);

  // User input grabbed from search bar
  const [searchTerm, setSearchTerm] = useState("");

  // filtered employees that match the searchTerm
  const [filteredEmployee, setFilteredEmployee] = useState([]);

  const [sortByName, setSortByName] = useState(false)

  // Grabs employees from randomuser api and sets into employee and filtered employee states
  useEffect(() => {
    API.getEmployees().then((res) => {
      console.log(res.data.results);
      setEmployeeState(res.data.results);
      setFilteredEmployee(res.data.results);
    });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      searchEmployeeName();
    }
  }, [searchTerm]);

  // Filters employees into new array if input contains letters of employees names
  const searchEmployeeName = () => {
    let filterArr = employeeState.filter((user) =>
      user.name.first.toLowerCase().includes(searchTerm));
      setFilteredEmployee(filterArr);
  };

  // Grabs input from user input and sets into SearchTerm
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    console.log(event.target.value);
  };

  // Sort name by ascending or descending order
  const sortBy = () => {
  
    if (!sortByName){
      setEmployeeState(employeeState.sort((a,b) => (a.name.firt > b.name.first) ? 1 : -1));
      setSortByName(true);
    } else {
      setEmployeeState(employeeState.sort((a,b) => (a.name.first > b.name.first) ? -1 : 1))
      setSortByName(false)
    }
  }

  return (
    <div>
      <NavBar />

      <SearchBar
      handleInputChange={handleInputChange} 
      results={searchTerm}
       />
      
    
      <Table 
      users={filteredEmployee}
      handleSort ={sortBy}
      sortedName = {sortByName} />
    </div>
  );
}

export default App;
