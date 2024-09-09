import React from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/footer/footerlogo.png";
import { socialMediaIcons } from "../../Services/data/header/HeaderData";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.one}>
        <div className={styles.footer}>
          <div className={styles.about}>
            <h1>About</h1>
            <p>
              Discover timeless treasures at ABC Vintage in Prague. We offer a
              curated selection of vintage products.
            </p>
          </div>

          <div className={styles.mainMenu}>
            <h1>Main menu</h1>
            <nav>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Benefits</li>
              </ul>
              <ul>
                <li>Gallery</li>
                <li>Spotlight</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>

          <div className={styles.logo}>
            <img src={logo} alt="Footer Logo" />
          </div>

          <div className={styles.contact}>
            <h1>Contact</h1>
            <p>Email Us: ABCvintage@mail.com</p>
            <p>Call Us: +123456789</p>
            <p>Address: Prague 1, Czech</p>
          </div>

          <div className={styles.follow}>
            <h1>Follow Us</h1>
            {socialMediaIcons.map((icon) => (
              <div key={icon.id} className={styles.socialItem}>
                <img src={icon.src} alt={icon.alt} /> {icon.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.copyrightConteiner}>
        <div className={styles.copyright}>
          <h1>Abc Vintage</h1>
          <p>Copyright @ 2024 ABC Vintage All rights reserved.</p>
        </div>
        <div className={styles.navlinks}>
          <nav>
            <ul>
              <li>Eng</li>
              <li>Privacy</li>
              <li>Cookie preferences</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
