import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Hats from "./Hats/Hats";
import Accessories from "./Accessories/Accessories";
import Clothing from "./Clothing/Clothing";
import LandingPage from "./LandingPage/LandingPage";
import Wigs from "./Wigs/Wigs";

import "./App.css";
import "./Normalize.css";

function App() {
  const [list, setList] = useState([]);
  console.log('final list', list);

  const handleAdd = (item) => {
    setList((list) => [...list, item]);
  };
  return (
    <div className="Marketplace">
      {/* <header className="App-header"> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>

          <Route
            path="/accessories"
            element={<Accessories handleAdd={handleAdd} />}
          ></Route>

          <Route
            exact
            path="/clothing"
            element={<Clothing handleAdd={handleAdd} />}
          ></Route>
          <Route
            exact
            path="/hats"
            element={<Hats handleAdd={handleAdd} />}
          ></Route>

          <Route
            exact
            path="/wigs"
            element={<Wigs handleAdd={handleAdd} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
