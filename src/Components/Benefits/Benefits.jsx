import React from "react";
import BenefitsImg from "../../assets/Benefits/Benefits.png";
import styles from "./benefits.module.scss";
import BenefitsCart from "./BenefitsCart/BenefitsCart";
import { benefitsdata } from "../../Services/data/benefits/benefitsData";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Benefits() {
  return (
    <div className={styles.benefitsConteiner}>
      <div className={styles.title}>
        <img src={BenefitsImg} />
        <div className={styles.text}>
          <p>
            At ABC Vintage, we believe that every piece has a story to tell.
            Whether you’re looking to add a touch of history to your home or
            find a unique item that stands out.
          </p>
        </div>
      </div>
      <Swiper
      className={styles.swiper}
      pagination={{
        clickable: false,
      }}
      modules={[Pagination]}
 
  
         spaceBetween={14}
         breakpoints={{
       
       
       
          1550: {
            slidesPerView: 4,
          },
       
          1000: {
            slidesPerView: 3.5,
          },
          600: {
            slidesPerView: 2.5,
          },
          320:{
            slidesPerView: 1.5,
          }
       
        }}
      >
      <div className={styles.benefitsdata}>
        {benefitsdata.map((elem) => (
           <SwiperSlide  className={styles.swiperslider} key={elem.id}> <BenefitsCart key={elem.id} data={elem} /></SwiperSlide> 
        ))}
      </div>
      </Swiper>
    </div>
  );
}
