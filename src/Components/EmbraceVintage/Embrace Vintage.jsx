import React from "react";
import styles from "./embracevintage.module.scss";
import { useTranslation } from 'react-i18next';


export default function EmbraceVintage() {


  const { t } = useTranslation(); 

  return (
    <div className={styles.EmbraceVintageComponent}>
      <div className={styles.vintageElegance}>
        <h1>
          Embrace Vintage
          <br /> Elegance
        </h1>
        <button>{t("EmbraceVintage.shop")}</button>
      </div>
    </div>
  );
}
