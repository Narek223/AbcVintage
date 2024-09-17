import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import logo from "../../assets/Header/logo.png";
import { scrollToSection } from "../../Functions/Header/scrollToSection";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import { socialMediaIcons } from "../../Services/data/header/HeaderData";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';





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
  let ref = useRef();

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

 

  const showNavBar = () => {
    setShow((prev) => !prev);
  };


  const DrawerList = (
    <Box role="presentation" onClick={showNavBar}>
      <List className={styles.listconteiner}>
        <ListItem className={styles.navtext} key="home" disablePadding>
          <ListItemButton>
            <ListItemText className={styles.mek} primary="Home" />
          
          </ListItemButton>
        </ListItem>
        {['About Us', 'Benefits', 'Gallery', "Spotlight", "Contact", "Eng"].map((text, index) => (
          <ListItem className={styles.navtext} key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {show && (
          <ul className={styles.socialicons}>
            {socialMediaIcons.map(icon => (
              <li key={icon.id}>
                <a href={icon.link}>
                  <img src={icon.src} alt={icon.alt} />
                </a>
              </li>
            ))}
          </ul>
        )}
     <p  onClick={()=>{setShow(false)}} className={styles.clearIcon}>   <MdClear  /></p>  
      </List>
    </Box>
  );
  
  
  return (
    <div className={styles.headerConteiner}>
      <header>
        <HeaderInfo />
        <nav
          className={`${styles.headerNav} ${isScrolled ? styles.scrolled : ""}`}
        >
          <img src={logo} onClick={() => scrollToSection(home)} alt="Logo" />

          <div className={styles.icons} onClick={showNavBar}>
            {show ? <GiHamburgerMenu /> : <GiHamburgerMenu />}
          </div>

          <div className={`${styles.listbox} ${show ? styles.changebg : ""}`}>
            <div className={styles.list} ref={ref}>

            <Drawer open={show}  anchor="right"   PaperProps={{ style: { width: '68%', backgroundColor:' rgba(152, 137, 108, 1)' } }}  onClose={showNavBar}>
        {DrawerList}
      </Drawer>
              <ul
                className={`${styles.responsivenavigation}  ${
                  show ? styles.openNavBar : styles.closeNavBar
                }`}
              >
                <li onClick={() => scrollToSection(home)}>Home </li>
                <li onClick={() => scrollToSection(aboutRef)}>About Us</li>
                <li onClick={() => scrollToSection(benefits)}>Benefits</li>
                <li onClick={() => scrollToSection(gallery)}>Gallery</li>
                <li onClick={() => scrollToSection(Spotlight)}>Spotlight</li>
                <li onClick={() => scrollToSection(contact)}>Contact</li>
                {show === false ? null : <li>Eng</li>}
                {show === false ? null : (
                  <ul className={styles.socialicons}>
                 
                  </ul>
                )}
              </ul>

            
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
