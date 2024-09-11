import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BooksProvider>
      <Books></Books>
    </BooksProvider>
  );
}

export default App;
