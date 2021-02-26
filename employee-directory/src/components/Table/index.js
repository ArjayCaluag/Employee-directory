import React from "react";
import "./style.css";

function Table(props) {
 

  return (
    <div>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col" >Picture</th>
            <th scope="col" onClick={props.handleSort}  >Name</th>
            <th scope="col">email</th>
            <th scope="col">Phone #</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(user => (
            <tr>
              <td>
                {" "}
                <img src={user.picture.large} alt="userImage" />{" "}
              </td>
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
