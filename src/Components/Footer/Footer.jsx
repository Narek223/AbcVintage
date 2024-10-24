import React from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/footer/footerlogo.png";
import { socialMediaIcons } from "../../Services/data/header/HeaderData";
import { useTranslation } from "react-i18next";
import Change from "../../shered_components/changelanguage/Change";
import i18n from "../../i18n";
import { scrollToSection } from "../../Functions/Header/scrollToSection";

export default function Footer({
  home,
  aboutRef,
  benefits,
  gallery,
  Spotlight,
  contact,
}) {
  const { t } = useTranslation();

  let nextnavItems = [
    { name: t("footer.mainMenu.items.gallery"), id: "gallery", ref: gallery },
    {
      name: t("footer.mainMenu.items.spotlight"),
      id: "spotlight",
      ref: Spotlight,
    },
    { name: t("header.contact"), id: "contact", ref: contact },
  ];
  let navItems = [
    { name: t("footer.mainMenu.items.home"), id: "home", ref: home },
    { name: t("footer.mainMenu.items.aboutUs"), id: "about", ref: aboutRef },
    {
      name: t("footer.mainMenu.items.benefits"),
      id: "benefits",
      ref: benefits,
    },
  ];

  const currentLang = i18n.language;

  return (
    <div
      className={`${styles.footerContainer} ${
        currentLang === "cz" ? styles.czStyles : ""
      }`}
    >
      <div className={styles.one}>
        <div className={styles.footer}>
          <div className={styles.about}>
            <h1>{t("footer.about.title")}</h1>
            <p>{t("footer.about.text")}</p>
          </div>

          <div className={styles.mainMenu}>
            <h1>{t("footer.mainMenu.title")}</h1>
            <nav>
              <ul>
                {navItems.map(({ name, ref, id }) => (
                  <li onClick={() => scrollToSection(ref)} key={id}>
                    {name}
                  </li>
                ))}
              </ul>
              <ul>
                {nextnavItems.map(({ name, ref, id }) => (
                  <li onClick={() => scrollToSection(ref)} key={id}>
                    {name}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.logo}>
            <img src={logo} alt="Footer Logo" />
          </div>

          <div className={styles.contact}>
  <h1>{t("footer.contact.title")}</h1>

  <a href="mailto:ABCvintage@gmail.com">
    <p>{t("footer.contact.email")} ABCvintage@gmail.com</p>
  </a>

  <a href="tel:+37493555566">
    <p>
      {t("footer.contact.callUs")}
      {t("footer.contact.PhoneNumber")}
    </p>
  </a>

  <a
    href="https://www.google.com/maps/place/40.179186,44.478342,14"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p>
      {t("footer.contact.address")}
      {t("footer.contact.addressPraha")}
    </p>
  </a>
</div>


          <div className={styles.follow}>
            <h1>{t("footer.followUs")}</h1>
            <div className={styles.socialMediaicons}>
              {socialMediaIcons.map((icon) => (
                <a href={icon.link} target="blank">
                  <div key={icon.id} className={styles.socialItem}>
                    <img src={icon.src} alt={icon.alt} />
                    <p> {icon.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyrightConteiner}>
        <div className={styles.copyright}>
          <h1>Abc Vintage</h1>
          <p>{t("footer.copyright")}</p>
        </div>
        <div className={styles.navlinks}>
          <nav>
            <ul>
              <Change />
              <li>{t("footer.navLinks.privacy")}</li>
              <li>{t("footer.navLinks.cookiePreferences")}</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
