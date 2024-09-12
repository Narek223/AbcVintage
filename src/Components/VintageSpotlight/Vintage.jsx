import React from "react";
import styles from "./vintaje.module.scss";
import VintageItem from "./VintageItem/VintageItem";
import { vintageItems } from "../../Services/data/vintageData/vintage";

export default function Vintage() {
  return (
    <div className={styles.vintageConteiner}>
      <div className={styles.vintagetitle}>
        <h1>Vintage Spotlight</h1>
      </div>

      {vintageItems.map((elem) => (
        <VintageItem key={elem.id} data={elem} />
      ))}
    </div>
  );
}
