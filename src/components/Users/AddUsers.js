import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

const AddUsers = ({ onAddUser }) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });

      return;
    }
    onAddUser(enteredUserName, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };

  const enteredNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={enteredNameHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={enteredAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
