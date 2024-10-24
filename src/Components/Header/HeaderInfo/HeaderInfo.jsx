import React  from "react";
import styles from "./header-info.module.scss";
import { socialMediaIcons } from "../../../Services/data/header/HeaderData";
import Change from "../../../shered_components/changelanguage/Change";
import { useTranslation } from "react-i18next";

const HeaderInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactConteiner}>
      <div className={styles.contactInformation}>
        <a href="tel:+37493555566">{t("header.call")}: +123456789</a>
        <nav className={styles.iconsImg}>
          {socialMediaIcons.map((icon) => (
            <a href={icon.link} key={icon.id} target="_blank">
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </nav>
        <Change />
      </div>
    </div>
  );
};

export default HeaderInfo;
