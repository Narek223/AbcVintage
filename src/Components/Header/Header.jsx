import React, { useState, useEffect,useRef } from "react";
import styles from "./header.module.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import logo from "../../assets/Header/logo.png";
import { scrollToSection } from "../../Functions/Header/scrollToSection";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import { socialMediaIcons } from "../../Services/data/header/HeaderData";

export default function Header({
  home,
  aboutRef,
  benefits,
  gallery,
  Spotlight,
  contact,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  let ref=useRef()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 1000 && show) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [show]);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, [ref]);

 
  const showNavBar = () => {
    setShow(prev => !prev);
  };

  return (
    <div className={styles.headerConteiner}>
      <header>
        <HeaderInfo />
        <nav className={`${styles.headerNav} ${isScrolled ? styles.scrolled : ""}`}>
          <img src={logo} onClick={() => scrollToSection(home)} alt="Logo" />
          <div className={styles.icons} onClick={showNavBar}>
            {show ? <MdClear /> : <GiHamburgerMenu />}
          </div>
          <div className={`${styles.listbox} ${show ? styles.changebg : ''}`}>
            <ul className={show ? styles.openNavBar : styles.closeNavBar}  ref={ref}>
              <li onClick={() => scrollToSection(home)}>Home </li>  
              <li onClick={() => scrollToSection(aboutRef)}>About Us</li>
              <li onClick={() => scrollToSection(benefits)}>Benefits</li>
              <li onClick={() => scrollToSection(gallery)}>Gallery</li>
              <li onClick={() => scrollToSection(Spotlight)}>Spotlight</li>
              <li onClick={() => scrollToSection(contact)}>Contact</li>
              {show===false?null: <li>Eng</li>}
              {/* {show===false?null:
               <ul className={styles.socialicons}>
                
                {socialMediaIcons.map((icon) => (
          <li>  <a href=""><img key={icon.id} src={icon.src} alt={icon.alt} /></a></li>
          ))}
                </ul>} */}
            </ul>
 
          </div>
        </nav>
      </header>
    </div>
  );
}
