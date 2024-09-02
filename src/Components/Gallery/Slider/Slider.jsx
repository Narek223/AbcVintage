// import React from "react";
// import styles from "./slider.module.scss";
// import { sliderdata } from "../../../Services/data/Gallery/sliderimgdata";
// import { MdKeyboardArrowLeft,MdKeyboardArrowRight  } from "react-icons/md";
// import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// export default function Slider() {
//   return (
//     <div className={styles.galleryconteiner}>

//       <h1>See More Images of Vintage Products</h1>
//       <div className={styles.sliderconteiner}>
//         <button className='custom-prev'>
//             <MdKeyboardArrowLeft className={styles.icon}/>
//         </button>
// <Swiper
//  modules={[Navigation, Pagination, Scrollbar, A11y]}
//  spaceBetween={10}
//   loop={true}
//   slidesPerView={3}
//   navigation={{
//     nextEl: '.custom-next',
//     prevEl: '.custom-prev', 
//   }}
// >
//         {sliderdata.map((elem) => (
//             <SwiperSlide key={elem.id} className='t'>
//           <div className={styles.slider} key={elem.id}>
//             <img src={elem.img} />
//           </div>
//           </SwiperSlide>
//         ))}
//   </Swiper>
//         <button className='custom-next'>
//           <MdKeyboardArrowRight  className={styles.icon} />
//         </button>
//       </div>
//     </div>
//   );
// }
