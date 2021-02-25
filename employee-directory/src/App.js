import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import API from "./utils/API";

function App() {
  // initialize use state as an array.
  const [employeeState, setEmployeeState] = useState([]);

  useEffect(() => {
    API.getEmployees(employeeState).then(res => {
      console.log(res.data.results)
      setEmployeeState(res.data.results);
    });
  },[]);

  // master array = []
  // filtered array = [] .filter

//picture ,firstname , last name, email , 

// res.results[i].name.picture.dob

// .map()

  return (
    <div>
      <NavBar />
      <div>
        <Table users = {employeeState} />
      </div>
    </div>
  );
}

export default App;
