import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Hats from "./Hats/Hats";
import Accessories from "./Accessories/Accessories";
import Clothing from "./Clothing/Clothing";
import LandingPage from "./LandingPage/LandingPage";
import Wigs from "./Wigs/Wigs";
import MyList from "./MyList";

import "./App.css";
import "./Normalize.css";

function App() {
  const [list, setList] = useState([]);
  console.log("final list", list);

  const handleAdd = (item) => {
    // TODO: need to make it so that it updates the quantity and stops when quantity is 0
    item.count = item.count - 1
    console.log('count', item.count)
    setList((list) => [...list, item]);
    window.localStorage.setItem("items", JSON.stringify(list));
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
            path="/clothing"
            element={<Clothing handleAdd={handleAdd} />}
          ></Route>
          <Route path="/hats" element={<Hats handleAdd={handleAdd} />}></Route>

          <Route path="/wigs" element={<Wigs handleAdd={handleAdd} />}></Route>
          <Route path="/my-list" element={<MyList list={list} />}></Route>
        </Routes>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
