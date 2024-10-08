import React from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/footer/footerlogo.png";
import { socialMediaIcons } from "../../Services/data/header/HeaderData";
import { useTranslation } from 'react-i18next'; 
import Change from "../../shered_components/changelanguage/Change";

export default function Footer() {


  const { t } = useTranslation(); 
  
  return (
    <div className={styles.footerContainer}>
      <div className={styles.one}>
        <div className={styles.footer}>
          <div className={styles.about}>
            <h1>{t("footer.about.title")}</h1>
            <p>
            {t("footer.about.text")}
            </p>
          </div>

          <div className={styles.mainMenu}>
            <h1>{t("footer.mainMenu.title")}</h1>
            <nav>
              <ul>
                <li>{t("footer.mainMenu.items.home")}</li>
                <li>{t("footer.mainMenu.items.aboutUs")}</li>
                <li>{t("footer.mainMenu.items.benefits")}</li>
              </ul>
              <ul>
                <li>{t("footer.mainMenu.items.gallery")}</li>
                <li>{t("footer.mainMenu.items.spotlight")}</li>
                <li>{t("footer.mainMenu.items.contact")}</li>
              </ul>
            </nav>
          </div>

          <div className={styles.logo}>
            <img src={logo} alt="Footer Logo" />
          </div>

          <div className={styles.contact}>
            <h1>{t("footer.contact.title")}</h1>
            <p>{t("footer.contact.email")}<a href="mailto:ABCvintage@gmail.com"/> ABCvintage@mail.com<a/></p>
            <p>{t("footer.contact.callUs")}</p>
            <p>{t("footer.contact.address")}</p>
          </div>

          <div className={styles.follow}>
            <h1>{t("footer.followUs")}</h1>
            
            {socialMediaIcons.map((icon) => (
              <div key={icon.id} className={styles.socialItem}>
                <img src={icon.src} alt={icon.alt} /> 
              <p> {icon.text}</p> 
              </div>
            ))}
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
             
              <Change/>
              <li>{t("footer.navLinks.privacy")}</li>
              <li>{t("footer.navLinks.privacy")}</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
