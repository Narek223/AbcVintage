import React, { useState } from "react";
import styles from './header-info.module.scss';
import { socialMediaIcons } from "../../../Services/data/header/HeaderData";
import Change from "../../../shered_components/changelanguage/Change";
import { useTranslation } from 'react-i18next'; 


const HeaderInfo = () => {

 const { t } = useTranslation(); 

  

  return (
    <div className={styles.contactConteiner}>
      <div className={styles.contactInformation}>
        <p>{t("header.call")}: +123456789</p>
        <nav className={styles.iconsImg}>
          {socialMediaIcons.map((icon) => (
            <a href={icon.link} key={icon.id}>
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </nav>
      <Change/>
      </div>
    </div>
  );
};

export default HeaderInfo;
