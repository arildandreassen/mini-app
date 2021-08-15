import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => {
        setUsers(json);
      });
  });

  return (
    <div>
      <a href="/">home</a>
      {users.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </div>
  );
}

export default Users;
