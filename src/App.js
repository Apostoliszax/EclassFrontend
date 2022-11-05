import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { ReactDOM } from "react-dom";
import { Register } from "./Register";
import { Login } from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
