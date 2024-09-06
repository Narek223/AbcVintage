import React from "react";
import styles from "./aboutus.module.scss";
import Aboutusitem from "./AboutUsItem/Aboutusitem";
import { aboutData } from "../../Services/data/aboutus/aboutusdata";

export default function AboutUs() {
  return (
    <div className={styles.aboutusconteiner}>
      {aboutData.map((elem) => (
        <Aboutusitem key={elem.id} data={elem} />
      ))}
    </div>
  );
}
