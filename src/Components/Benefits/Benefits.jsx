import React  from "react";
import styles from "./benefits.module.scss";
import BenefitsCart from "./BenefitsCart/BenefitsCart";
import  {useBenefitsData}  from "../../Services/data/benefits/benefitsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { benefitsBreakpoints } from "../../Services/data/benefits/breakpoints";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from 'react-i18next';
import {swiperstyles} from '../../Services/data/swiperStyles'


export default function Benefits() {

let benefits =useBenefitsData()
const { t } = useTranslation(); 

  return (
    <div className={styles.benefitsConteiner}>
      <div className={styles.title}>
        <h1>{t("benefits.mainpart.title")}</h1>
        <div className={styles.text}>
          <p>{t("benefits.mainpart.text")} </p>
        </div>
      </div>
      <Swiper
        className={styles.swiper}
        
        style={swiperstyles}
        modules={[Pagination]}
        pagination={{
          bulletClass: `swiper-pagination-bullet ${styles["feature-pagination"]}`,
          clickable: true,
        }}
        spaceBetween={10}
        breakpoints={benefitsBreakpoints}>
        <div className={styles.benefitsdata}>
          {benefits.map((elem) => (
            <SwiperSlide className={styles.swiperslider} key={elem.id}>

              <BenefitsCart key={elem.id} data={elem} deley={elem.id} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
