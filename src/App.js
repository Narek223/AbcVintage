import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Routefiles from "./Routes/Routefiles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routefiles />
    </div>
  );
}

export default App;
