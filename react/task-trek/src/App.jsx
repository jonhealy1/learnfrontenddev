import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
  const [tasks, setTasks] = useState([]);

  console.log("tasks", tasks);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          image={todoIcon}
          tasks={tasks}
          status="todo"
        />
        <TaskColumn
          title="Doing"
          image={doingIcon}
          tasks={tasks}
          status="doing"
        />
        <TaskColumn title="Done" image={doneIcon} tasks={tasks} status="done" />
      </main>
    </div>
  );
};

export default App;
