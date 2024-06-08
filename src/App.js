import React from "react";
import "./App.css";
import FurnitureStore from "./componnets/Leyout";
import Navigation from "./componnets/navigaton";

function App() {
  return (
    <container className="App">
      <div>
        <FurnitureStore />
      </div>
      <div>
        <Navigation />
      </div>
    </container>
  );
}

export default App;
