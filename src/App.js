import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import EntireStore from './EntireStore';

import "./App.css";
import './Normalize.css';

function App() {
  const [category, setCategory] = useState("all");

  return (
    <div className="Marketplace">
      {/* <header className="App-header"> */}
      <BrowserRouter>
        <Header setCategory={setCategory} />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>

          <Route
            path="/store"
            element={<EntireStore category={category} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
