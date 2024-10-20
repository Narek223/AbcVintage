import React from "react";
import styles from "./benefitscart.module.scss";
import i18n from "../../../i18n";

export default function BenefitsCart({ data,deley }) {
  return (
    <div data-aos="fade-up"
    data-aos-duration="2000"  data-aos-delay={deley*300}     className={styles.benefitscart}>
      <div className={styles.benefitsinfo}>
        <h1>{data.title}</h1>
        <img src={data.img} />
      </div>
      <p lang={i18n.language}>{data.text}</p>
    </div>
  );
}
