import React from "react";
import styles from "./header.module.scss";

import HeaderInfo from "./HeaderInfo/HeaderInfo";

export default function Header() {
  return (
    <div className={styles.headerConteiner}>
              <header>
     <HeaderInfo/>

        <nav></nav>
      </header>
    </div>
  );
}
