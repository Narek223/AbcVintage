import React from 'react'
import styles from '../../Components/Gallery/GalleryItem/galleryitem.module.scss'
import vectorimg from "../../assets/Gallery/Vector.png";


export default function Sideboard({title,h1,description}) {
  return (
    <div className={styles.sideboardTexttwo}>
          <p>{title}</p>
          <h1>{h1}</h1>
          <img src={vectorimg} />
          <p>{description}</p>
    
      </div>
  )
}
