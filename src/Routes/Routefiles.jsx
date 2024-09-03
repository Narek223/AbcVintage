import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";
import  Benefits from '../Components/Benefits/Benefits'
import EmbraceVintage from "../Components/EmbraceVintage/Embrace Vintage";
import Gallery from "../Components/Gallery/Gallery";
import Slider from "../Components/Gallery/Slider/Slider";
import  Vintage from '../Components/VintageSpotlight/Vintage'
export default function Routefiles() {
  return (
    <div>

      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
      {/* </Routes> */}
      <Home/>
      <AboutUs/>
      <Benefits/>
      <EmbraceVintage/>
      <Gallery/>
      <Slider/>
      <Vintage/>
    </div>
  );
}
