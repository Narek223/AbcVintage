import React, { useState } from "react";
import styles from "./slider.module.scss";
import { sliderdata } from "../../../Services/data/Gallery/sliderimgdata";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
    const [showDetail, setShowDetail] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);


let windowfunction=(index)=>{
    setSelectedIndex(index)
    setShowDetail(true)
}


  

  return (
    <div className={styles.galleryconteiner}>
      <h1>See More Images of Vintage Products</h1>
      <div className={styles.sliderconteiner}>
        <button className="custom-prev">
          <MdKeyboardArrowLeft className={styles.icon} />
        </button>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          loop={true}
          slidesPerView={3}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {sliderdata.map((elem) => (
            <SwiperSlide key={elem.id} className={styles.swiper}>
              <div className={styles.slider} key={elem.id}>
                <img src={elem.img} onClick={() => windowfunction(elem.id)} />
              </div>
            </SwiperSlide>
          ))}
          
          {showDetail ? (
            <div className={styles.nextpage}>
                <div className={styles.imgconteiner}>
                <img src={sliderdata[selectedIndex].img}/>
                </div>
          </div>) : null}

        </Swiper>
        <button className="custom-next">
          <MdKeyboardArrowRight className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
