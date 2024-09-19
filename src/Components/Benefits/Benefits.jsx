import React from "react";
import BenefitsImg from "../../assets/Benefits/Benefits.png";
import styles from "./benefits.module.scss";
import BenefitsCart from "./BenefitsCart/BenefitsCart";
import { benefitsdata } from "../../Services/data/benefits/benefitsData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
        slidesPerView={4}
        // loop={true}
        // spaceBetween={24}
      >
      <div className={styles.benefitsdata}>
        {benefitsdata.map((elem) => (
           <SwiperSlide key={elem.id}> <BenefitsCart key={elem.id} data={elem} /></SwiperSlide> 
        ))}
      </div>
      </Swiper>
    </div>
  );
}
