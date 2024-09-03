import React from "react";
import gallerydecor from "../../assets/Gallery/GallaryDecorImg.png";
import Meal from "./Meal/Meal";
import styles from "./gallery.module.scss";
import vector from "../../assets/Gallery/Vector.png";




export default function Gallery() {
  return (
    <div className={styles.conteiner}>
      <h1 className={styles.gallarytitle}>Gallery</h1>
      <div className={styles.galleryConteiner}>
        <div className={styles.Sideboard}>
          <div className={styles.sideboardText}>
            <p>Designed for Generations</p>
            <h1>Style Your Sideboard</h1>
            <img src={vector} />
            <p>Our favorite sideboards and decors</p>
          </div>
          <p>
            Sideboards, also known as buffets, have a rich history dating back
            to the 16th century in Europe. Originally, they were designed as
            simple wooden tables where food could be placed before being served
            in dining rooms. Over time, sideboards evolved to include drawers,
            cupboards, and other storage spaces, making them more functional for
            holding dishes, cutlery, and linens. Today, sideboards are still
            valued for their versatility and functionality, often used not only
            in dining rooms but also in living rooms and hallways.
          </p>
        </div>

        <div className={styles.galleryImgCont}>
          <img src={gallerydecor} />
        </div>
      </div>

     <Meal/>
 
    </div>
  );
}
