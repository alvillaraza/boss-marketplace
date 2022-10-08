import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import EntireStore from './EntireStore';
import allData from "./allData";
import Description from "./Description";

import "./App.css";
import './Normalize.css';

function App() {
  const [category, setCategory] = useState("");
  return (
    <div className="Marketplace">
      <BrowserRouter>
        <Header setCategory={setCategory} />
        <Routes>
          <Route path="/about" element={<LandingPage />}></Route>
          <Route
            exact path="/"
            element={<EntireStore category={category} />}
          ></Route>
        </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
