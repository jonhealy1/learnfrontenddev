import React from "react";
import { useState } from "react";

const CreateTodo = () => {
  const countArr = useState(0);
  const count = countArr[0];
  const setCount = countArr[1];

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Tasks: {count}</h1>
      <button onClick={handleClick} value="Add Task Button">
        Add Task
      </button>
    </>
  );
};

export default CreateTodo;
