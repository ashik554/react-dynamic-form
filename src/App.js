import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [enteredUser, setEnteredUser] = useState([]);
  console.log(enteredUser);
  const addUserHandler = (uName, uAge) => {
    setEnteredUser((prev) => {
      return [
        ...prev,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={enteredUser} />
    </div>
  );
}

export default App;
