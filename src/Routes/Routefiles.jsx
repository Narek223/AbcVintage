import React, { useRef } from "react";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";
import Benefits from "../Components/Benefits/Benefits";
import EmbraceVintage from "../Components/EmbraceVintage/EmbraceVintage";
import Gallery from "../Components/Gallery/Gallery";
import Slider from "../Components/Gallery/Slider/Slider";
import Vintage from "../Components/VintageSpotlight/Vintage";
import FollowUs from "../Components/FollowOninstagram/FollowUs";
import Contact from "../Components/ContactUs/Contact";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export default function Routefiles() {
  const homeref = useRef(null);
  const aboutUsRef = useRef(null);
  const Benefitsref = useRef(null);
  const galleryref = useRef(null);
  const vintajeref = useRef(null);
  const contactref = useRef(null);
  const embraceVintageref = useRef(null);
  const followusref = useRef(null);
  return (
    <div>
      <Header
        home={homeref}
        aboutRef={aboutUsRef}
        benefits={Benefitsref}
        gallery={galleryref}
        Spotlight={vintajeref}
        contact={contactref}
        EmbraceVintage={embraceVintageref}
        followUs={followusref}
      />
      <section ref={homeref}>
        <Home />
      </section>

      <section ref={aboutUsRef}>
        <AboutUs />
      </section>
      <section ref={Benefitsref}>
        <Benefits />
      </section>

      <section ref={embraceVintageref}>
        <EmbraceVintage />
      </section>

      <section ref={galleryref}>
        <Gallery />
      </section>
      <Slider />
      <section ref={vintajeref}>
        <Vintage />
      </section>
      <section ref={followusref}>
        <FollowUs />
      </section>

      <section ref={contactref}>
        <Contact />
      </section>
      <section>
        <Footer
          home={homeref}
          aboutRef={aboutUsRef}
          benefits={Benefitsref}
          gallery={galleryref}
          Spotlight={vintajeref}
          contact={contactref}
        />
      </section>
    </div>
  );
}
