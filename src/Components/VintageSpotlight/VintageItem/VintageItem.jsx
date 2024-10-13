import React from "react";
import styles from "./vintageItem.module.scss";

export default function VintageItem({ data }) {

  const { imgSrc, title, description, isReversed } = data;

  return (
    <div
    data-aos="fade-right"
    data-aos-duration="1000"  data-aos-once="true" 
      className={`${styles.vintageItem} ${isReversed ? styles.reversed : ""}   data-aos="fade-left"
    data-aos-duration="1000" data-aos-once="true"  ` }>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
