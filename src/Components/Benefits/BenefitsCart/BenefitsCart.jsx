import React from "react";
import styles from "./benefitscart.module.scss";
import i18n from "../../../i18n";

export default function BenefitsCart({ data,deley }) {

  const aosDeley=deley*300

  return (
    <div data-aos="fade-up"
    data-aos-duration="2000"  data-aos-delay={aosDeley}     className={styles.benefitscart}>
      <div className={styles.benefitsinfo} data-aos="zoom-in" data-aos-delay={aosDeley}  >
        <h1>{data.title}</h1>
        <img src={data.img} />
      </div>
      <p lang={i18n.language} data-aos-delay={aosDeley}  data-aos="zoom-in" >{data.text}</p>
    </div>
  );
}
