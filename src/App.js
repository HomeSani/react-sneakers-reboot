import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/favorites" component={Favorites}></Route>
          <Route exact path="/orders" component={Orders}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
