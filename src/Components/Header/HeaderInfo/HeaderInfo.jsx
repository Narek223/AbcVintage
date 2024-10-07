import React, { useState } from "react";
import styles from './header-info.module.scss';
import { socialMediaIcons } from "../../../Services/data/header/HeaderData";
import { IoMdArrowDropdown } from "react-icons/io";
import { Menu, MenuItem, FormControl, Select } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useTranslation } from 'react-i18next'; 
import i18n from '../../../i18n';

const HeaderInfo = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("Eng");
 const { t } = useTranslation(); 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    if (lang === "Eng") {
      i18n.changeLanguage('en');
    } else if (lang === "Cz") {
      i18n.changeLanguage('cz');
    }
    handleMenuClose();
  };

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
        <FormControl variant="outlined" sx={{ color:'white'}}>
      
          <Select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            IconComponent={IoMdArrowDropdown}
            sx={{
              backgroundColor: "#98896c",
              color: "white",
              '& .MuiSelect-icon': {
                color: 'white',
              },
              '& .MuiInputBase-root': {
                color: 'white',
                padding:0,
              },
               "& .MuiOutlinedInput-input":{
                fontSize: "22px",
                padding:0,
                 fontFamily: "Times New Roman", 
               },
              '& .MuiOutlinedInput-notchedOutline': {
                padding:0,
              border:'none',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
  
                border:'none',
              },
            }}
            inputProps={{
              style: {
                padding: 0,  
                border: 'none',
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#98896c",
                  color: "white",
                },
              },
            }}
          >
            <MenuItem value="Eng">Eng</MenuItem>
            <Divider sx={{ backgroundColor: 'white' }} className={styles.divider} />
            <MenuItem value="Cz">Cz</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default HeaderInfo;
