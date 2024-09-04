import React from "react";
import styles from "./aboutus.module.scss";
import choose from "../../assets/AboutUs/Choose.png";
import texture from "../../assets/AboutUs/texture.png";
import shopingimg from "../../assets/AboutUs/ShoppingStore.png";
import nextTexture from "../../assets/AboutUs/Group (1).png";
import Aboutusitem from "./AboutUsItem/Aboutusitem";

export default function AboutUs() {
  return (
    <div className={styles.aboutusconteiner}>
      <Aboutusitem
        imgsrc={choose}
        text={
          "ABC Vintage was born out of a deep love for history and a passion  for preserving the beauty of the past. Our journey began in the cobblestone streets of Prague, where our founder, an avid collector of vintage items, spent years curating a personal collection of treasures from across Europe. What started as a personal hobby quickly evolved into a mission: to share the timeless elegance and craftsmanship of vintage goods with a wider audience."
        }
        vintageimg={texture}
        title="About us"
      />

      <Aboutusitem
        imgsrc={shopingimg}
        text={
          " Since opening our doors, we have dedicated ourselves to sourcing only the finest vintage pieces, each with its own unique story an charm. From meticulously crafted porcelain to iconic mid-century furniture, our collection reflects the rich cultural heritage and artistic traditions of bygone eras. Every item we offer is handpicked for its quality, authenticity, and the sense of nostalgia it evokes."
        }
        vintageimg={nextTexture}
        isReversed
      />
    </div>
  );
}
