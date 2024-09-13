import React from "react";

const CreateTodo = () => {
  const tasks = 0;
  const handleClick = () => {
    console.log("Add Task");
  };
  return (
    <>
      <h1>Tasks: {tasks}</h1>
      <button onClick={handleClick} value="Add Task Button">
        Add Task
      </button>
    </>
  );
};

export default CreateTodo;
