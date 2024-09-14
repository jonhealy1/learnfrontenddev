import React from "react";
import { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);

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
