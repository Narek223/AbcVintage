import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import logo from "../../assets/Header/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {

  let [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll  = () => {
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
        <nav className={`${styles.headerNav} ${isScrolled? styles.scrolled:""}`}>
          <img src={logo} />
          <ul>
          <li>Home   </li>  
          <li> About Us</li>
          {/* <li><NavLink to="/">Home</NavLink>    </li>   */}
           {/* <li> <NavLink to="/AboutUs">About Us</NavLink> </li> */}
            <li>Benefits</li>
            <li>Gallery</li>
            <li>Spotlight</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
