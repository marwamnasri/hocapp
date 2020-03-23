import React from "react";
import ReactDOM from "react-dom";
import MovieList from "./Movielist";
import HOC from "./Hoc"
import './App.css';




function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default HOC(App);
