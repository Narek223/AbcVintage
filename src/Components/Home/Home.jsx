import React from "react";
import AbcVintageImg from "../../assets/HomePage/AbcVintage.png";
import Vintage from "../../assets/HomePage/Vintage.png";
import styles from "./home.module.scss";
import { useTranslation } from "react-i18next";



export default function Home() {
  const { t } = useTranslation();

  


  
  return (
    <div className={styles.homepageconteiner}>
      <div
  
        data-aos-duration="1000"
        data-aos="fade-right"
        className={styles.welcometoAbc}
      >
        <img src={AbcVintageImg} />
        <h1>{t("home.welcome")}</h1>
        <p>{t("home.text")}</p>
      </div>
      <div className={styles.imgbox}>
        <img src={Vintage} className={styles.vintageimg} />
      </div>
    </div>
  );
}
