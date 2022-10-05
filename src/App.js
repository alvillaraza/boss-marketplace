import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Hats from "./Hats/Hats";
import Accessories from "./Accessories/Accessories";
import Clothing from "./Clothing/Clothing";
import LandingPage from "./LandingPage/LandingPage";
import Wigs from "./Wigs/Wigs";
import MyList from "./MyList";
import data from "./Clothing/data";

import "./App.css";
import "./Normalize.css";

function App() {
  const [list, setList] = useState(data);
  console.log("this list", { list });

  const handleAdd = (selectedItem) => {
    console.log("this iten", { selectedItem });

    // item.count = item.count - 1;
    // item.inCart = item.inCart + 1;

    setList((prev) => {
      return prev.map((section) => {
        return section.available.map((item) => {
          if (selectedItem.item === item.item) {
            console.log("item", item);

            return { ...item, count: item.count - 1, inCart: item.inCart + 1 };
          }

          return { ...item };
        });
      });
    });
  };

  const handleRemove = (item) => {
    item.count = item.count + 1;

    item.inCart = item.inCart - 1;

    setList((current) =>
      current.forEach((i) => {
        return i.inCart - 1;
      })
    );
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
