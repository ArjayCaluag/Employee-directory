import React from "react";
import "./style.css";

function Table({users}) {
  console.log(users);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">email</th>
          <th scope="col">Phone #</th>
         
        </tr>
      </thead>
      <tbody>

      {users.map(user => (
        <tr>
         
          <td> <img src = {user.picture.large} alt ="userImage" /> </td> 
          <td>{user.name.first} {user.name.last}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
      ))}

        
      </tbody>
    </table>
  );
}

export default Table;