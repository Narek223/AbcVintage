import React from 'react'
import styles from './benefitscart.module.scss'


export default function BenefitsCart({data}) {
  return (
    <div className={styles.benefitscart}>
<div className={styles.benefitsinfo}>
<h1>{data.title}</h1>
<img src={data.img}/>

</div>
<p>{data.text}</p>
    </div>
  )
}
