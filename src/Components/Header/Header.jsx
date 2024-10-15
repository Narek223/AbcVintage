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
  const [activeSection, setActiveSection] = useState("");
  let ref = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = [
        { id: "home", ref: home },
        { id: "about", ref: aboutRef },
        { id: "benefits", ref: benefits },
        { id: "gallery", ref: gallery },
        { id: "spotlight", ref: Spotlight },
        { id: "contact", ref: contact },
      ];

      const currentSection = sections.find(({ ref }) => {
        const sectionTop = ref.current.getBoundingClientRect().top;
        return sectionTop <= 100 && sectionTop >= -100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [home, aboutRef, benefits, gallery, Spotlight, contact]);

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
    { name: t("header.home"), id: "home", ref: home },
    { name: t("header.about"), id: "about", ref: aboutRef },
    { name: t("header.benefits"), id: "benefits", ref: benefits },
    { name: t("header.gallery"), id: "gallery", ref: gallery },
    { name: t("header.spotlight"), id: "spotlight", ref: Spotlight },
    { name: t("header.contact"), id: "contact", ref: contact },
  ];

  return (
    <div className={styles.headerConteiner}>
      <header>
        <HeaderInfo />
        <nav
          className={`${styles.headerNav} ${isScrolled ? styles.scrolled : ""}`}
        >
          <div className={styles.headerContent}>
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
                      width: "280px",
                      backgroundColor: "rgba(152, 137, 108, 1)",
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
                  {navItems.map(({ name, id, ref }) => (
                    <li
                      key={id}
                      onClick={() => scrollToSection(ref)}
                      className={activeSection === id ? styles.active : ""}
                    >
                      {name}
                    </li>
                  ))}
                  {show === false ? null : <Change />}
                  {show === false ? null : (
                    <ul className={styles.socialicons}></ul>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
