import { useState, useEffect, useRef } from "react";
import styles from "./slider.module.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ImageModal from "./ImageModal/ImageModal";
import { sliderdata } from "../../../Services/data/Gallery/sliderimgdata";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { gallerybreakpoints } from "../../../Services/data/Gallery/galleryBreakpoints";
import { useTranslation } from "react-i18next";
import { swiperstyles } from "../../../Services/data/swiperStyles";

export default function Slider() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const swiperInstanceRef = useRef(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  let next = () => {
    setSelectedIndex(
      selectedIndex === sliderdata.length - 1 ? 0 : selectedIndex + 1
    );
  };

  let prev = () => {
    setSelectedIndex(
      selectedIndex === 0 ? sliderdata.length - 1 : selectedIndex - 1
    );
  };


  useEffect(() => {
    const handleResize = () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.update(); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.galleryconteiner}>
      <h1 className={styles.slidertitle}>{t("gallery.slider.sliderTitle")}</h1>
      <div className={styles.sliderconteiner}>
        <button className="custom-prev">
          <MdKeyboardArrowLeft className={styles.icon} data-aos="zoom-in" data-aos-duration="2000" />
        </button>
        <Swiper
          onSwiper={(swiper) => {
            swiperInstanceRef.current = swiper; 
          }}
          style={swiperstyles}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={gallerybreakpoints}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {sliderdata.map((elem, index) => (
            <SwiperSlide key={elem.id} className={styles.swiper}>
              <div className={styles.slider} key={elem.id}>
                <img src={elem.img} onClick={() => handleOpen(index)} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="custom-next">
          <MdKeyboardArrowRight className={styles.icon} data-aos="fade-right" data-aos="zoom-in" data-aos-duration="2000" />
        </button>
      </div>
      {open ? (
        <div className={styles.parentModal}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={styles.modal}
            slotProps={{
              backdrop: {
                sx: {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  border: "none",
                },
              },
            }}
          >
            <Box className={styles.modalBox}>
              <ImageModal
                index={selectedIndex}
                onNext={next}
                onPrev={prev}
                close={handleClose}
              />
            </Box>
          </Modal>
        </div>
      ) : null}
    </div>
  );
}
