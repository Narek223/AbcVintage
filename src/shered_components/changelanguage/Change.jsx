import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {  MenuItem, FormControl, Select } from "@mui/material";
import Divider from "@mui/material/Divider";
import i18n from "../../i18n";
import styles from "../../Components/Header/HeaderInfo/HeaderInfo";



export default function Change() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("Eng");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    if (lang === "Eng") {
      i18n.changeLanguage("en");
    } else if (lang === "Cz") {
      i18n.changeLanguage("cz");
    }
    handleMenuClose();
  };

  return (
    <div>
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
              fontSize: "22px",
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
          <MenuItem value="Eng">Eng</MenuItem>
          <Divider
            sx={{ backgroundColor: "white" }}
            className={styles.divider}
          />
          <MenuItem value="Cz">Cz</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
