import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Hats from './Hats/Hats';
import Accessories from './Accessories/Accessories';
import Clothing from './Clothing/Clothing';
import LandingPage from './LandingPage/LandingPage';
import Wigs from './Wigs/Wigs';
import MyList from './MyList';
import data from './Clothing/data';

import './App.css';
import './Normalize.css';

function App() {
    const [list, setList] = useState(data);
    console.log('this list', list);

    const handleAdd = (selectedItem) => {
        setList((prev) => {
            return prev.map((section) => {
                section.available.forEach((item) => {
                    if (item.item === selectedItem.item) {
                        item.inCart = item.inCart + 1;
                        item.count = item.count - 1;
                    }
                });

                return section;
            });
        });
    };

    const handleRemove = (selectedItem) => {
        setList((prev) => {
            return prev.map((section) => {
                section.available.forEach((item) => {
                    if (item.item === selectedItem.item) {
                        item.inCart = item.inCart - 1;
                        item.count = item.count + 1;
                    }
                });

                return section;
            });
        });
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
                            <Clothing
                                handleAdd={handleAdd}
                                handleRemove={handleRemove}
                            />
                        }
                    ></Route>
                    <Route
                        path="/hats"
                        element={<Hats handleAdd={handleAdd} />}
                    ></Route>

                    <Route
                        path="/wigs"
                        element={<Wigs handleAdd={handleAdd} />}
                    ></Route>
                    <Route
                        path="/my-list"
                        element={
                            <MyList list={list} handleRemove={handleRemove} />
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
            {/* </header> */}
        </div>
    );
}

export default App;
