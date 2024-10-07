import React,{useRef}from "react";
import styles from "./aboutus.module.scss";
import Aboutusitem from "./AboutUsItem/Aboutusitem";
import { useAboutData } from "../../Services/data/aboutus/aboutusdata";

export default function AboutUs() {
  const aboutData = useAboutData();

  return (
    <div className={styles.aboutusconteiner} id="about-us">
      {aboutData.map((elem) => (
        <Aboutusitem key={elem.id} data={elem} />
      ))}
    </div>
  );
}
