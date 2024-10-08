import React from "react";
import styles from "./vintaje.module.scss";
import VintageItem from "./VintageItem/VintageItem";
import { useVintageItems } from "../../Services/data/vintageData/vintage";
import { useTranslation } from 'react-i18next'; 

export default function Vintage() {
  const { t } = useTranslation(); 
  let vintageItems=useVintageItems()

  return (
    <div className={styles.vintageConteiner}>
      <div className={styles.vintagetitle}>
        <h1>{t("VintageSpotlight.title")}</h1>
      </div>

      {vintageItems.map((elem) => (
        <VintageItem key={elem.id} data={elem} />
      ))}
    </div>
  );
}
