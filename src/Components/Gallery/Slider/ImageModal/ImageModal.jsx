// ImageModal.jsx
import React from 'react';
import styles from './imagemodal.module.scss';
import { sliderdata } from '../../../../Services/data/Gallery/sliderimgdata';
import vector from '../../../../assets/Gallery/Vector.png';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function ImageModal({ index}) {
  
    const prev=()=>{
 index ===0?index+=0:index+=1
    }
    let next=()=>{
        return index+=1
    }

  return (
    <div className={styles.openwindow}>
      <div className={styles.arrowLeft} >
        <MdKeyboardArrowLeft onClick={prev} size={40} className={styles.arrowicon} />
      </div>
      <div className={styles.nextpage}>
        <div className={styles.imgconteiner}>
          <img src={sliderdata[index].img} alt="Selected" />
        </div>
        <div className={styles.imageModelText}>
          <p>Designed for Generations</p>
          <h1>Style Your Sideboard</h1>
          <img src={vector} alt="Vector" />
          <p>Our favorite sideboards and decors</p>
          <button>Close</button>
        </div>
      </div>
      <div className={styles.arrowRight} >
        <MdKeyboardArrowRight onClick={()=>next} size={40} className={styles.arrowicon} />
      </div>
    </div>
  );
}
