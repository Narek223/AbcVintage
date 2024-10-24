import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MenuItem, FormControl, Select } from "@mui/material";
import Divider from "@mui/material/Divider";
import i18n from "../../i18n";
import styles from "./change.module.scss";
import { getCustomStyles } from "./materialUiStyles/materialstyles";


export default function Change({sxstyle}) {
  const [language, setLanguage] = useState(i18n.language === "cz" ? "Cz" : "Eng");



  let menuitemhover={
    "&:hover": {
      // backgroundColor: "rgba(97, 85, 59, 1);",
      color: "rgba(97, 85, 59, 1);", 
    }
  }
  const handleLanguageChange = (lang) => {
    if (lang === "Eng") {
      i18n.changeLanguage("en");
    } else if (lang === "Cz") {
      i18n.changeLanguage("cz");
    }
    setLanguage(lang);
  };

  useEffect(() => {
    setLanguage(i18n.language === "cz" ? "Cz" : "Eng");
  }, [i18n.language]);

  return (
    <div className={styles.container}>
      <FormControl variant="outlined">
        <Select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          IconComponent={IoMdArrowDropdown}
          sx={{...getCustomStyles(18,22),...sxstyle}}
          inputProps={{
            style: {
              padding: 0,
              border: "none",
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
          <MenuItem   disableRipple  value="Eng" sx={menuitemhover}>Eng</MenuItem>
          <Divider sx={{ backgroundColor: "white" }} />
          <MenuItem value="Cz" sx={menuitemhover} >Cz</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
