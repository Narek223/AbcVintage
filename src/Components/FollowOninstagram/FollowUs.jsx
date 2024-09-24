import React from 'react';
import styles from './followus.module.scss';
import { RiInstagramLine } from "react-icons/ri";
import { imgslider } from '../../Services/data/followoninstagram/followimgdata';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function FollowUs() {



  return (
    <div className={styles.followusContainer}>
      <div className={styles.followusText}>
        <h1>Follow Us on Instagram</h1>
        <p>Be the first to know about new arrivals and exclusive offers!</p>
        <button>
          <RiInstagramLine className={styles.icon} /> Follow us
        </button>
      </div>

      <div className={styles.followusImgContainer}>
        <Swiper
        spaceBetween={20}
          modules={[Autoplay]}
          slidesPerView={5}
          autoplay={{
            delay: 1, 
            disableOnInteraction: false, 
            pauseOnMouseEnter: true, 
          }}
          speed={3000} 
          loop={true}
          allowTouchMove={false} 
          breakpoints={{
            1500: {
              slidesPerView: 5,
            },
  
            1000: {
              slidesPerView: 4,
            
            },
            700: {
              slidesPerView: 3,
           
            },
            400: {
              slidesPerView: 1.5,
            
            },
            320: {
              slidesPerView: 1.5,
           
            },
          }}
        >
          {imgslider.map((elem) => (
            <SwiperSlide key={elem.id} className={styles.image}>
              <img src={elem.img} alt={`Slide ${elem.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
