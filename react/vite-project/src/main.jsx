import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import CreateTodo from "./components/CreateTodo";

const firstElement = <h1>First Element</h1>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Card></Card>
    <CreateTodo></CreateTodo>
  </React.StrictMode>
);
