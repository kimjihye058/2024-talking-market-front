import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./home/Home";
import Voice from "./voice/Voice";
import Choice from "./choice/Choice";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/voice" element={<Voice />} />
        <Route path="/" element={<Choice />} />
      </Routes>
    </Router>
  );
}

export default App;
