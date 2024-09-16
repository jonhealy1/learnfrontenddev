import React from "react";
import Todo from "../assets/direct-hit.png";

import "./TaskColumn.css";

const TaskColumn = ({ image, title }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={image} alt="" />
        {title}
      </h2>
    </section>
  );
};

export default TaskColumn;
