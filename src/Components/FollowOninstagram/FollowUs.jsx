import React from "react";
import styles from "./followus.module.scss";
import { RiInstagramLine } from "react-icons/ri";
import { imgslider } from "../../Services/data/followoninstagram/followimgdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { swiperbreakpoints } from "../../Services/data/followoninstagram/breakpoints";
import "swiper/css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function FollowUs() {
  const { t } = useTranslation();

  return (
    <div className={styles.followusContainer}>
      <div className={styles.followusText}>
        <h1 lang={i18n.language}>{t("FollowUs.followUsTitle")}</h1>
        <p lang={i18n.language}>{t("FollowUs.followUsText")}</p>
        <button>
          <RiInstagramLine className={styles.icon} />
          <a href="https://www.instagram.com/" target="blank">
            {t("FollowUs.followUsButton")}
          </a>
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
          breakpoints={swiperbreakpoints}
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
