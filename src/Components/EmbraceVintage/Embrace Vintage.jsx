import React from "react";
import styles from "./embracevintage.module.scss";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function EmbraceVintage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { t } = useTranslation();

  return (
    <div className={styles.EmbraceVintageComponent} ref={ref}>
      <div
        className={`${styles.vintageElegance} ${inView ? styles.visible : ""}`}
      >
        <h1>
          Embrace Vintage
          <br /> Elegance
        </h1>
        <button>{t("EmbraceVintage.shop")}</button>
      </div>
    </div>
  );
}
