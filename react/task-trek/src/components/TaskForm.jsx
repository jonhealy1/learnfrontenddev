import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [task, setTask] = useState("");

  console.log(task);
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML"></Tag>
            <Tag tagName="CSS"></Tag>
            <Tag tagName="JavaScript"></Tag>
            <Tag tagName="React"></Tag>
          </div>
          <div>
            <select className="task_status">
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
