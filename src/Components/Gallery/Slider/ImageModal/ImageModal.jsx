// ImageModal.jsx
import React, { useRef,useState,useEffect } from 'react';
import styles from './imagemodal.module.scss';
import { sliderdata } from '../../../../Services/data/Gallery/sliderimgdata';
import vector from '../../../../assets/Gallery/Vector.png';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


export default function ImageModal({ index,onNext,onPrev,close}) {
  let [closewindow,setclosewindow]=useState(false)
   let ref=useRef()

   useEffect(()=>{
    let closeblog=(e)=>{
      if(ref.current && !ref.current.contains(e.target))setclosewindow(false)
    }
     document.addEventListener('mousedown',closeblog)

     return ()=>{
     document.removeEventListener('mousedown',closeblog)
     }
  },[closewindow])



  return (
    <div className={styles.openwindow} ref={ref}>
      <div className={styles.arrowLeft} >
        <MdKeyboardArrowLeft onClick={onPrev} size={40} className={styles.arrowicon} />
      </div>
      <div className={styles.nextpage}>
        <div className={styles.imgconteiner}>
          <img src={sliderdata[index].largeversion} alt="Selected" />
        </div>
        <div className={styles.imageModelText}>
          <p>Designed for Generations</p>
          <h1>Style Your Sideboard</h1>
          <img src={vector} alt="Vector" />
          <p>Our favorite sideboards and decors</p>
          <button onClick={close}>Close</button>
        </div>
      </div>
      <div className={styles.arrowRight} >
        <MdKeyboardArrowRight onClick={onNext} size={40} className={styles.arrowicon}  />
      </div>
    </div>
  );
}
