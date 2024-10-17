import React, { useState } from "react";
import styles from "./imagemodal.module.scss";
import { sliderdata } from "../../../../Services/data/Gallery/sliderimgdata";
import vector from "../../../../assets/Gallery/Vector.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function ImageModal({ index, onNext, onPrev, close }) {
  const { t } = useTranslation();
  const [closingwindow, setclosingwindow] = useState();

  const handleClose = () => {
    setclosingwindow(true);
    setTimeout(close, 500);
  };

  return (
    <div
      className={`${styles.openwindow} ${closingwindow ? styles.closing : ""}`}
    >
      <div className={styles.arrowLeft} onClick={onPrev}>
        <MdKeyboardArrowLeft size={24} className={styles.arrowicon} />
      </div>

      <div className={styles.nextpage}>
        <div className={styles.imgconteiner}>
          <img src={sliderdata[index].img} alt="Selected" />
        </div>

        <div className={styles.imageModelText}>
          <p>{t("gallery.section1.title")}</p>
          <h1>{t("gallery.section1.heading")}</h1>
          <img src={vector} alt="Vector" />
          <p>{t("gallery.section2.description")}</p>
          <button onClick={handleClose}>{t("gallery.section1.close")}</button>
        </div>
      </div>
      <div className={styles.arrowRight} onClick={onNext}>
        <MdKeyboardArrowRight size={24} className={styles.arrowicon} />
      </div>
    </div>
  );
}
