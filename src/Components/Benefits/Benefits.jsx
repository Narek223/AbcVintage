import React from "react";
import BenefitsImg from "../../assets/Benefits/Benefits.png";
import styles from "./benefits.module.scss";
import BenefitsCart from "./BenefitsCart/BenefitsCart";
import { benefitsdata } from "../../Services/data/benefits/benefitsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { benefitsBreakpoints } from "../../Services/data/benefits/breakpoints";
import "swiper/css";
import "swiper/css/pagination";

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
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        modules={[Pagination]}
        pagination={{
          bulletClass: `swiper-pagination-bullet ${styles["feature-pagination"]}`,
          clickable: true,
        }}

        spaceBetween={10}
        breakpoints={benefitsBreakpoints}>
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
