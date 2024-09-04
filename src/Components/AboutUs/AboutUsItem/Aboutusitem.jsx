import React from 'react'
import styles from './aboutusitem.module.scss'


export default function ({imgsrc,vintageimg,text,title,isReversed}) {
  return (
  <div className={`${styles.abcVintageLove} ${isReversed? styles.reversed :""}`}>
    <div className={styles.vintageimg}>
      <img src={imgsrc} />
    </div>
    <div className={styles.aboutUsHistory}>
      <h1>{title}</h1>
      <p>
        {text}
      </p>
      <img src={vintageimg} />
    </div>
  </div>

  )
}