import React from 'react'
import AbcVintageImg from '../../assets/HomePage/AbcVintage.png'
import Vintage from "../../assets/HomePage/Vintage.png"
import styles from './home.module.scss'


export default function Home() {
  return (
    <div className={styles.homepageconteiner}>
<div className={styles.welcometoAbc}>
<img src={AbcVintageImg}/>
<h1>Welcome to ABC Vintage</h1>
<p>Where history meets style. Based in the heart of   Prague, we specialize in curating a unique collection     of authentic vintage treasures that add charm and character to any space or wardrobe.</p>
</div>
<div className={styles.imgbox}>
    <img src={Vintage} className={styles.vintageimg}/>
</div>

    </div>
  )
}
