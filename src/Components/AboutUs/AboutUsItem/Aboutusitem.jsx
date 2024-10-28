import React, { useEffect } from 'react';
import styles from "./aboutusitem.module.scss";
import AOS from 'aos'; 

export default function AboutUsItem({ data }) {
  let { imgsrc, textureimg, text, title, isReversed } = data;

  useEffect(() => {
    AOS.init({ duration: 2000, once: false , mirror: true,
      anchorPlacement: 'top-bottom',});
    
    
  }, []);

  return (
    <div
      className={`${styles.abcVintageLove} ${isReversed ? styles.reversed : ""}`}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      <div className={styles.vintageimg}>
        <img src={imgsrc} alt={title} />
      </div>
      <div className={styles.aboutUsHistory}>
        <h1>{title}</h1>
        <p>{text}</p>
        <img src={textureimg} alt="" />
      </div>
    </div>
  );
}
