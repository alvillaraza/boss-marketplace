import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import EntireStore from './EntireStore';

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

          <Route path="/store" element={<EntireStore />}></Route>
        </Routes>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;
