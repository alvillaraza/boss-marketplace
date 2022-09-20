import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Hats from "./Hats/Hats";
import Accessories from "./Accessories/Accessories";
import Clothing from "./Clothing/Clothing";
import LandingPage from "./LandingPage/LandingPage";
import Wigs from "./Wigs/Wigs";

import "./App.css";
import './Normalize.css';

function App() {
  return (
    <div className="Marketplace">
      {/* <header className="App-header"> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>

          <Route path="/accessories" element={<Accessories />}></Route>

          <Route exact path="/clothing" element={<Clothing />}></Route>
          <Route exact path="/hats" element={<Hats />}></Route>

          <Route exact path="/wigs" element={<Wigs />}></Route>
        </Routes>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
