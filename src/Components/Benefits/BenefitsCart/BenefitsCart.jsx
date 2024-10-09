import React from "react";
import styles from "./benefitscart.module.scss";
import i18n from "../../../i18n";

export default function BenefitsCart({ data }) {
  return (
    <div className={styles.benefitscart}>
      <div className={styles.benefitsinfo}>
        <h1>{data.title}</h1>
        <img src={data.img} />
      </div>
      <p lang={i18n.language}>{data.text}</p>
    </div>
  );
}
