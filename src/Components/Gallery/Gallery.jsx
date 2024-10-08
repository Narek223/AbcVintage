import React from "react";
import styles from "./gallery.module.scss";
import { useGalleryboxdata } from "../../Services/data/Gallery/gallerydata";
import GalleryItem from "./GalleryItem/GalleryItem";
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  let gallerydata=useGalleryboxdata()
  const { t } = useTranslation();
  return (
    <div className={styles.conteiner}>
      <h1 className={styles.gallarytitle}>{t("gallery.title")}</h1>
      {gallerydata.map((elem) => (
        <GalleryItem data={elem} key={elem.id}/>
      ))}
    </div>
  );
}
