import React from "react";
import styles from './header-info.module.scss'
import { socialMediaIcons } from "../../../Services/data/header/HeaderData";
import { IoMdArrowDropdown } from "react-icons/io";

const HeaderInfo = () => {
  return (
    <div className={styles.contactConteiner}>
      <div className={styles.contactInformation}>
        <p>Call Us: +123456789</p>
        <nav className={styles.iconsImg}>
          {socialMediaIcons.map((icon) => (
            <img key={icon.id} src={icon.src} alt={icon.alt} />
          ))}
        </nav>
        <p>
          Eng <IoMdArrowDropdown />
        </p>
      </div>
    </div>
  );
};

export default HeaderInfo;
