import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import logo from "../../assets/Header/logo.png";
import { scrollToSection } from "../../Functions/Header/scrollToSection";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "@mui/material/Drawer";
import DrawerList from "./Drawer/DrawerList";
import { useTranslation } from "react-i18next";
import Change from "../../shered_components/changelanguage/Change";

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
  const { t } = useTranslation();

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
    setShow(!show);
  };

  let navItems = [
    { name:t("header.home"), ref: home },
    { name: t("header.about"), ref: aboutRef },
    { name: t("header.benefits"), ref: benefits },
    { name: t("header.gallery"), ref: gallery },
    { name: t("header.spotlight"), ref: Spotlight },
    { name: t("header.contact"), ref: contact },
  ];

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
              <Drawer
                open={show}
                anchor="right"
                PaperProps={{
                  style: {
                    width: "68%",
                    backgroundColor: " rgba(152, 137, 108, 1)",
                  },
                }}
                onClose={showNavBar}
              >
                {
                  <DrawerList
                    navItems={navItems}
                    showNavBar={showNavBar}
                    show={show}
                  />
                }
              </Drawer>
              <ul
                className={`${styles.responsivenavigation}  ${
                  show ? styles.openNavBar : styles.closeNavBar
                }`}
              >
                <li onClick={() => scrollToSection(home)}>
                  {t("header.home")}
                </li>
                <li onClick={() => scrollToSection(aboutRef)}>
                  {t("header.about")}
                </li>
                <li onClick={() => scrollToSection(benefits)}>
                  {t("header.benefits")}
                </li>
                <li onClick={() => scrollToSection(gallery)}>
                  {t("header.gallery")}
                </li>
                <li onClick={() => scrollToSection(Spotlight)}>
                  {t("header.spotlight")}
                </li>
                <li onClick={() => scrollToSection(contact)}>
                  {t("header.contact")}
                </li>
                {show === false ? null : <Change/>}
                {show === false ? null : (
                  <ul className={styles.socialicons}></ul>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
