import React from "react";
import { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <h1>Tasks: {count}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} value="Add Task Button">
        Add Task
      </button>
      <h1>Input: {input}</h1>
    </>
  );
};

export default CreateTodo;
