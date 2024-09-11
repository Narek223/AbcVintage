import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import logo from "../../assets/Header/logo.png";


export default function Header({
  home,
  aboutRef,
  benefits,
  gallery,
  Spotlight,
  contact
}) {
  let [isScrolled, setisScrolled] = useState(false);


  
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
 
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      return window.scrollY > 0 ? setisScrolled(true) : setisScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.headerConteiner}>
      <header>
        <HeaderInfo />
        <nav
          className={`${styles.headerNav} ${isScrolled ? styles.scrolled : ""}`}
        >
          <img src={logo} onClick={() => scrollToSection(home)} />
          <ul>
            <li onClick={() => scrollToSection(home)}>Home </li>
            <li onClick={() => scrollToSection(aboutRef)}> About Us</li>
            <li onClick={() => scrollToSection(benefits)}>Benefits</li>
            <li onClick={() => scrollToSection(gallery)}>Gallery</li>
            <li onClick={() => scrollToSection(Spotlight)}>Spotlight</li>
            <li onClick={() => scrollToSection(contact)}>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
