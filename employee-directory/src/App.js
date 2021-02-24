import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Table from "./components/Table";

function App() {
  // const [employee, setEmployee] = useState({});

  return (
    <div>
      <NavBar />
      <div>
        <Table />
      </div>
    </div>
  );
}

export default App;
