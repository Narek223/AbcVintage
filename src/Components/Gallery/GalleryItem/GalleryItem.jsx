import React from "react";
import styles from "./galleryitem.module.scss";
import Sideboard from "../../../shered_components/gallery/Sideboard";



export default function GalleryItem({ data }) {
  
  let { isReversed, title, heading, vectorimg, description, text, img } = data;

  return (
    <div
      className={`${styles.galleryConteiner} ${
        isReversed ? styles.reversed : null
      }`}
    >
      <div className={styles.Sideboard}>
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
        <Sideboard h1="Style Your Sideboard" title="Designed for Generations" description="Our favorite sideboards and decors"/>
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
