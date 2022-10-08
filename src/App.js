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
  const [category, setCategory] = useState("all");
  return (
    <div className="Marketplace">
      {/* <header className="App-header"> */}
      <BrowserRouter>
        <Header setCategory={setCategory} />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          {/* <Route
            path="/store"
            element={<EntireStore category={category} />}
          ></Route> */}
        </Routes>
      </BrowserRouter>
          <div className="category-wrapper">
            {allData.map((item, idx) => {
              console.log(item.category);
              if (item.category === category) {
                return (
                  <div className="photo" key={idx}>
                    <img src={item.image} alt={item.name} />
                    <Description name={item.name} itemized={item.available} />
                  </div>
                );
              }
            })}
          </div>
      {/* </header> */}
    </div>
  );
}

export default App;
