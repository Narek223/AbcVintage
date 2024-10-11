import React, { useState,useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {  MenuItem, FormControl, Select } from "@mui/material";
import Divider from "@mui/material/Divider";
import i18n from "../../i18n";
import styles from "./change.module.scss";
import { useTheme } from '@mui/material/styles';



export default function Change() {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState(i18n.language === "cz" ? "Cz" : "Eng");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  console.log(language)
  const handleLanguageChange = (lang) => {
 
    if (lang === "Eng") {
      i18n.changeLanguage("en");
    } else if (lang === "Cz") {
      i18n.changeLanguage("cz");
    }
    setLanguage(lang);
    handleMenuClose();
  };

  useEffect(() => {
    setLanguage(i18n.language === "cz" ? "Cz" : "Eng");
  }, [i18n.language]);

  return (
    <div className={styles.conteiner}>
      <FormControl variant="outlined" sx={{ color: "white" }}>
        <Select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          IconComponent={IoMdArrowDropdown}
          sx={{
            backgroundColor: "#98896c",
            color: "white",
            "& .MuiSelect-icon": {
              color: "white",
            },
            "& .MuiInputBase-root": {
              color: "white",
              padding: 0,
            },
            "& .MuiOutlinedInput-input": {
              fontSize: {
                xs:"16", 
                sm: "18px", 
                md: "22px",
              },
              padding: 0,
              fontFamily: "Times New Roman",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              padding: 0,
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
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
          <MenuItem className={styles.language} value="Eng">Eng</MenuItem>
          <Divider
            sx={{ backgroundColor: "white" }}
            className={styles.divider}
          />
          <MenuItem  className={styles.language}  value="Cz">Cz</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
