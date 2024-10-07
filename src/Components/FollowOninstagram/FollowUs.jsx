import React from 'react';
import styles from './followus.module.scss';
import { RiInstagramLine } from "react-icons/ri";
import { imgslider } from '../../Services/data/followoninstagram/followimgdata';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { swiperbreakpoints } from '../../Services/data/followoninstagram/breakpoints';
import "swiper/css";
import { useTranslation } from 'react-i18next';

export default function FollowUs() {
  const { t } = useTranslation();



  return (
    <div className={styles.followusContainer}>
      <div className={styles.followusText}>
        <h1>{t('FollowUs.followUsTitle')}</h1>
        <p>{t('FollowUs.followUsText')}</p>
        <button>
          <RiInstagramLine className={styles.icon} /> {t('FollowUs.followUsButton')}
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
          breakpoints={swiperbreakpoints}>
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
