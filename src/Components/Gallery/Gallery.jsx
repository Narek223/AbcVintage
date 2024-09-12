import React from "react";
import styles from "./gallery.module.scss";
import { galleryboxdata } from "../../Services/data/Gallery/gallerydata";
import GalleryItem from "./GalleryItem/GalleryItem";


export default function Gallery() {
  
  return (
    <div className={styles.conteiner}>
      <h1 className={styles.gallarytitle}>Gallery</h1>
      {galleryboxdata.map((elem) => (
        <GalleryItem data={elem} key={elem.id}/>
      ))}
    </div>
  );
}
