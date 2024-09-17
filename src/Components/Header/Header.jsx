import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import logo from "../../assets/Header/logo.png";
import { scrollToSection } from "../../Functions/Header/scrollToSection";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import { socialMediaIcons } from "../../Services/data/header/HeaderData";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

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

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShow(open);
  };

  const drawerContent = (
    <div
      className={styles.drawerContent}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ul className={styles.responsivenavigation}>
        <li onClick={() => scrollToSection(home)}>Home </li>
        <li onClick={() => scrollToSection(aboutRef)}>About Us</li>
        <li onClick={() => scrollToSection(benefits)}>Benefits</li>
        <li onClick={() => scrollToSection(gallery)}>Gallery</li>
        <li onClick={() => scrollToSection(Spotlight)}>Spotlight</li>
        <li onClick={() => scrollToSection(contact)}>Contact</li>
        <li>Eng</li>
        <ul className={styles.socialicons}>
          {socialMediaIcons.map((icon) => (
            <li key={icon.id}>
              <a href="#">
                <img src={icon.src} alt={icon.alt} />
              </a>
            </li>
          ))}
        </ul>
      </ul>
      <IconButton className={styles.clear} onClick={toggleDrawer(false)}>
        <MdClear />
      </IconButton>
    </div>
  );

  return (
    <div className={styles.headerConteiner}>
      <header>
        <HeaderInfo />
        <nav
          className={`${styles.headerNav} ${isScrolled ? styles.scrolled : ""}`}
        >
          <img src={logo} onClick={() => scrollToSection(home)} alt="Logo" />

          <IconButton onClick={toggleDrawer(true)} className={styles.icons}>
            <GiHamburgerMenu />
          </IconButton>

          <Drawer anchor="left" open={show} onClose={toggleDrawer(false)}>
            {drawerContent}
          </Drawer>
        </nav>
      </header>
    </div>
  );
}
