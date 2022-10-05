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
  console.log("this list", {list});

  const handleAdd = (item) => {
    item.count = item.count - 1;
    item.inCart = true;
    setList((list) => [...list, item]);
  };

  const handleRemove = (item) => {
    // item.count = item.count + 1;
//
    // if (item.count <= 0) {
      item.inCart = false;
    // }
    setList((current) =>
      current.filter((i) => {
        return i !== item;
      })
    );

    // TODO: this removes the item completely even if it's just supposed to remove one
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
            element={
              <Clothing handleAdd={handleAdd} handleRemove={handleRemove} />
            }
          ></Route>
          <Route path="/hats" element={<Hats handleAdd={handleAdd} />}></Route>

          <Route path="/wigs" element={<Wigs handleAdd={handleAdd} />}></Route>
          <Route
            path="/my-list"
            element={<MyList list={list} handleRemove={handleRemove} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
