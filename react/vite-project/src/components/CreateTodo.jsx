import React from "react";

const CreateTodo = () => {
  const tasks = 2;
  const countTasks = () => {
    // if (tasks === 0) {
    //   return "No Tasks Available";
    // } else {
    //   return `Tasks: ${tasks}`;
    // }
    return tasks === 0 ? "No Tasks Available" : `Tasks: ${tasks}`;
  };
  return (
    <>
      <h1>{countTasks()}</h1>
      <button>Add Task</button>
    </>
  );
};

export default CreateTodo;
