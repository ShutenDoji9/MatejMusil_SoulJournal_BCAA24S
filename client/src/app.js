import React from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
