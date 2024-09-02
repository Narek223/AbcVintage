import React from "react";
import gallerydecor from "../../assets/Gallery/GallaryDecorImg.png";
import teaImg from "../../assets/Gallery/miniTea.png";
import styles from "./gallery.module.scss";
import vector from "../../assets/Gallery/Vector.png";
import Slider from "./Slider/Slider";



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

      <div className={styles.meal}>
        <div className={styles.mealImg}>
          <img src={teaImg} />
        </div>

        <div className={styles.Celebration}>
          <div className={styles.celebrationText}>
            <p>A Taste of Tradition</p>
            <h1>Where Every Meal Becomes a Celebration</h1>
            <img src={vector} />
            <p>Our favorite dishes</p>
          </div>

          <p>
            Porcelain has a fascinating history that dates back over a thousand
            years, originating in China during the Tang Dynasty (618–907 AD).
            The Chinese were the first to develop the techniques for producing
            porcelain, which is a type of ceramic made from a mixture of kaolin
            clay and other minerals, fired at very high temperatures. This
            process results in a material that is both translucent and highly
            durable, setting porcelain apart from other ceramics.
          </p>
        </div>
      </div>
      {/* <Slider/> */}
    </div>
  );
}
