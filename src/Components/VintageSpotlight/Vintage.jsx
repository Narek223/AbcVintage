import React from "react";
import styles from "./vintaje.module.scss";
import doll from "../../assets/VintageSpotlight/dollVintaje.png";
import camera from "../../assets/VintageSpotlight/VintajeCamera.png";
import vintaje from "../../assets/VintageSpotlight/vintage.png";
import VintageItem from "./VintageItem/VintageItem";

export default function Vintage() {
  return (
    <div className={styles.vintageConteiner}>
      <div className={styles.vintagetitle}>
        <h1>Vintage Spotlight</h1>
      </div>

      <VintageItem
        imgSrc={doll}
        title="The Elegance of Victorian Porcelain"
        description="Explore the history and craftsmanship of Victorian porcelain, a symbol of elegance in the 19th century."
      />

      <VintageItem
        imgSrc={vintaje}
        title="Mid-Century Modern Furniture"
        description="Discover the timeless appeal of mid-century modern furniture, known for its sleek lines and minimalist design."
        isReversed
      />

      <VintageItem
        imgSrc={camera}
        title="The Charm of Vintage Cameras"
        description="Step back in time with our collection of vintage cameras, where form meets function in these beautifully crafted pieces that capture both moments and the essence of an era."
      />
    </div>
  );
}
