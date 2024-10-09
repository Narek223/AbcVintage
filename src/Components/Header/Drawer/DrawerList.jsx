import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { MdClear } from "react-icons/md";
import { socialMediaIcons } from "../../../Services/data/header/HeaderData";
import { scrollToSection } from "../../../Functions/Header/scrollToSection";
import styles from "../header.module.scss";
import Divider from "@mui/material/Divider";
import Change from "../../../shered_components/changelanguage/Change";

export default function DrawerList({ navItems, showNavBar, show }) {
  return (
    <Box className={styles.box} role="presentation" onClick={showNavBar}>
      <List className={styles.listconteiner}>
        {navItems.map((text, index) => (
          <ListItem
            onClick={() => scrollToSection(text.ref)}
            className={styles.navtext}
            key={index}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ backgroundColor: 'white' }} className={styles.divider} />
        <ListItem className={styles.navtext} disablePadding>
          <ListItemButton>
            <ListItemText primary={<Change/>} />
          </ListItemButton>
        </ListItem>

        {show && (
          <ul className={styles.socialicons}>
            {socialMediaIcons.map((icon) => (
              <li key={icon.id}>
                <a href={icon.link}>
                  <img src={icon.src} alt={icon.alt} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </List>
      <p onClick={showNavBar} className={styles.clearIcon}>
        <MdClear />
      </p>
    </Box>
  );
}
