import React from "react";
import BenefitsImg from "../../assets/Benefits/Benefits.png";
import styles from "./benefits.module.scss";
import BenefitsCart from "./BenefitsCart/BenefitsCart";
import { benefitsdata } from "../../Services/data/benefits/benefitsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';



export default function Benefits() {
  return (
    <div className={styles.benefitsConteiner}>
      <div className={styles.title}>
        {/* <img src={BenefitsImg} /> */}
        <h1>Benefits</h1>
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
        style={{
          "--swiper-pagination-color": "black",
          "--swiper-pagination-bullet-inactive-color": "red",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
        pagination={{
      
          bulletClass: `swiper-pagination-bullet ${styles['feature-pagination']}`,
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={10}
        breakpoints={{
          1550: {
            slidesPerView: 4,
          },

          1000: {
            slidesPerView: 3.5,
            spaceBetween:0,
          },
          700: {
            slidesPerView: 2.5,
            spaceBetween:10,
          },
          400: {
            slidesPerView: 1.5,
            spaceBetween:24,
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween:45,
          },
        }}
      >
        <div className={styles.benefitsdata}>
          {benefitsdata.map((elem) => (
            <SwiperSlide className={styles.swiperslider} key={elem.id}>
              {" "}
              <BenefitsCart key={elem.id} data={elem} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
