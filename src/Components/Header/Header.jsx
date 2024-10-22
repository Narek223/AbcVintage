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
import { getCustomStyles } from "../../shered_components/changelanguage/materialUiStyles/materialstyles";
import { useNavigate, useLocation } from "react-router-dom";

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
  const [initialScroll, setInitialScroll] = useState(false); 
  let ref = useRef();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation(); 

  
  useEffect(() => {
    if (!initialScroll) {
      const sections = {
        "/": home,
        "/about": aboutRef,
        "/benefits": benefits,
        "/gallery": gallery,
        "/spotlight": Spotlight,
        "/contact": contact,
      };

      const currentPath = location.pathname;

      if (sections[currentPath]) {
        scrollToSection(sections[currentPath], navigate, currentPath);
        setActiveSection(currentPath.replace("/", "") || "home");
        setInitialScroll(true); 
      }
    }
  }, [location.pathname, home, aboutRef, benefits, gallery, Spotlight, contact, navigate, initialScroll]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = [
        { id: "home", ref: home, path: "/" },
        { id: "about", ref: aboutRef, path: "/about" },
        { id: "benefits", ref: benefits, path: "/benefits" },
        { id: "gallery", ref: gallery, path: "/gallery" },
        { id: "spotlight", ref: Spotlight, path: "/spotlight" },
        { id: "contact", ref: contact, path: "/contact" },
      ];

      const currentSection = sections.find(({ ref }) => {
        const sectionTop = ref.current.getBoundingClientRect().top;
        return sectionTop <= 100 && sectionTop >= -100;
      });

      if (currentSection && activeSection !== currentSection.id) {
        setActiveSection(currentSection.id);
        navigate(currentSection.path);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [home, aboutRef, benefits, gallery, Spotlight, contact, activeSection, navigate]);

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
    { name: t("header.home"), id: "home", ref: home, path: "/" },
    { name: t("header.about"), id: "about", ref: aboutRef, path: "/about" },
    { name: t("header.benefits"), id: "benefits", ref: benefits, path: "/benefits" },
    { name: t("header.gallery"), id: "gallery", ref: gallery, path: "/gallery" },
    { name: t("header.spotlight"), id: "spotlight", ref: Spotlight, path: "/spotlight" },
    { name: t("header.contact"), id: "contact", ref: contact, path: "/contact" },
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
                  {navItems.map(({ name, id, ref, path }) => (
                    <li
                      key={id}
                      onClick={() => scrollToSection(ref, navigate, path)}
                      className={activeSection === id ? styles.active : ""}
                    >
                      {name}
                    </li>
                  ))}
                  {show === false ? null : <Change sxstyle={getCustomStyles(22, 24)} />}
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
