// ImageModal.jsx
import React from 'react';
import styles from './imagemodal.module.scss';
import { sliderdata } from '../../../../Services/data/Gallery/sliderimgdata';
import vector from '../../../../assets/Gallery/Vector.png';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Sideboard from '../../../../shered_components/gallery/Sideboard';


export default function ImageModal({ index, onNext, onPrev, close }) {
  return (
    <div className={styles.openwindow}>
      <div className={styles.arrowLeft} onClick={onPrev}>
        <MdKeyboardArrowLeft size={24} className={styles.arrowicon} />
      </div>
      <div className={styles.nextpage}>
        <div className={styles.imgconteiner}>
          <img src={sliderdata[index].img} alt="Selected" />
        </div>
       
        <div className={styles.imageModelText}>
        <Sideboard h1="Style Your Sideboard" title="Designed for Generations" description="Our favorite sideboards and decors"/>
          {/* <p>Designed for Generations</p>
          <h1>Style Your Sideboard</h1>
          <img src={vector} alt="Vector" />
          <p>Our favorite sideboards and decors</p> */}
          <button onClick={close}>Close</button>
        </div>
      </div>
      <div className={styles.arrowRight} onClick={onNext}>
        <MdKeyboardArrowRight size={24} className={styles.arrowicon} />
      </div>
    </div>
  );
}
