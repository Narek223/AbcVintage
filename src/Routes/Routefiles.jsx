import React, { useRef } from "react";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";
import Benefits from "../Components/Benefits/Benefits";
import EmbraceVintage from "../Components/EmbraceVintage/Embrace Vintage";
import Gallery from "../Components/Gallery/Gallery";
import Slider from "../Components/Gallery/Slider/Slider";
import Vintage from "../Components/VintageSpotlight/Vintage";
import FollowUs from "../Components/FollowOninstagram/FollowUs";
import Contact from "../Components/ContactUs/Contact";
import Footer from "../Components/Footer/Footer";
import section from "../Components/section/section";
import Header from "../Components/Header/Header";

export default function Routefiles() {
  const homeref = useRef(null);
  const aboutUsRef = useRef(null);
  const Benefitsref = useRef(null);
  const galleryref = useRef(null);
  const vintajeref = useRef(null);
  const contactref = useRef(null);
  return (
    <div>
      <Header
        home={homeref}
        aboutRef={aboutUsRef}
        benefits={Benefitsref}
        gallery={galleryref}
        Spotlight={vintajeref}
        contact={contactref}
      />
      <section ref={homeref}>
        <Home />
      </section>

      <section  ref={aboutUsRef}>
        <AboutUs />
      </section>
      <section ref={Benefitsref}>
        <Benefits />
      </section>

      <EmbraceVintage />
      <section ref={galleryref}>
        <Gallery />
      </section>
      <Slider />
      <section ref={vintajeref}>
        <Vintage />
      </section>

      <FollowUs />
      <section ref={contactref}>
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
