// UserList.jsx ANVÄNDARLISTA
import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  const addUser = () => {
    if (newUser) {
      setUsers([...users, newUser]);
      setNewUser("");
    }
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const sortUsers = () => {
    setUsers([...users].sort());
  };

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
      <button onClick={sortUsers}>Sort Users</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => deleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
