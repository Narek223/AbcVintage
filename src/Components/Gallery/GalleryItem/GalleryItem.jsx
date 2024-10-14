import React from "react";
import styles from "./galleryitem.module.scss";
import Sideboard from "../../../shered_components/gallery/Sideboard";
import { useTranslation } from 'react-i18next'; 


export default function GalleryItem({ data }) {
  
  let { isReversed, title, heading, vectorimg, description, text, img } = data;

  const { t } = useTranslation(); 
  
  return (
    <div data-aos="zoom-in"
    data-aos-duration="2000"  data-aos-delay="300"  data-aos-once="true"  className={`${styles.galleryConteiner} ${
        isReversed ? styles.reversed : null
      }`}
    >
      <div   className={styles.Sideboard}>
        <div className={styles.sideboardText}>
          <p>{title}</p>
          <h1>{heading}</h1>
          <img src={vectorimg} />
          <p>{description}</p>
        </div>
        <p>{text} </p>
      </div>

      <div className={styles.galleryImgCont}>
        <img
          className={` ${isReversed ? styles.fiximgborder : null}`}
          src={img}
        />
        <Sideboard h1={t("gallery.section1.heading")}  title={t("gallery.section1.title")} description={t("gallery.section1.description")}/>
        {/* <div className={styles.sideboardTexttwo}>
          <p>{}</p>
          <h1>Style Your Sideboard</h1>
          <img src={vectorimg} />
          <p>{description}</p>
    
      
      </div> */}
      </div>
    </div>
  );
}
