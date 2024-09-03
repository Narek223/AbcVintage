import React from 'react'
import styles from './meal.module.scss'
import teaImg from "../../../assets/Gallery/miniTea.png";
import vector from "../../../assets/Gallery/Vector.png";

export default function Meal() {
  return (
    <div>
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
    </div>
  )
}
