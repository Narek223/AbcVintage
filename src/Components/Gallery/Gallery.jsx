import React from "react";
import styles from "./gallery.module.scss";
import { useGalleryboxdata } from "../../Services/data/Gallery/gallerydata";
import GalleryItem from "./GalleryItem/GalleryItem";


export default function Gallery() {
  let gallerydata=useGalleryboxdata()
  return (
    <div className={styles.conteiner}>
      <h1 className={styles.gallarytitle}>Gallery</h1>
      {gallerydata.map((elem) => (
        <GalleryItem data={elem} key={elem.id}/>
      ))}
    </div>
  );
}
