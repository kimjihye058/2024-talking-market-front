import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./home/Home";
import Order from "./order/Order";
import Choice from "./choice/Choice";
import ChoiceList from "./choice_list/ChoiceLIst";
import Address from "./address/Address";
import AddressCheck from "./address_check/AddressCheck";
import MartMap from "./mart_map/MartMap";
import Success from "./success/Success";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />  {/* 잘못된 경로일 경우 홈으로 리다이렉트 */}
        <Route path="/order" element={<Order />} />
        <Route path="/choice" element={<Choice />} />
        <Route path="/choicelist" element={<ChoiceList />} />
        <Route path="/address" element={<Address />} />
        <Route path="/addresscheck" element={<AddressCheck />} />
        <Route path="/martmap" element={<MartMap />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
