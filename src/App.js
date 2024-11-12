import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./home/Home";
import Voice from "./voice/Voice";
import Choice from "./choice/Choice";
import Order from "./order/Order";
import Address from "./address/Address";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/voice" element={<Voice />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />  {/* 잘못된 경로일 경우 홈으로 리다이렉트 */}
        <Route path="/order" element={<Order />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </Router>
  );
}

export default App;
