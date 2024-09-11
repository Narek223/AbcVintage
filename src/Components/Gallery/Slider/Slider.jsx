import { useState } from "react";
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
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height:"100%",

  border: 'none', // Убедитесь, что бордер отключен
  boxShadow: 'none', // Убедитесь, что нет теней, которые могут выглядеть как бордер
  outline: 'none',

  // p: 4,
};

export default function Slider() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (index) => {
    console.log("clicked");
    setSelectedIndex(index);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  

  const openImageModal = (index) => {
    setSelectedIndex(index);
    setShowDetail(true);
  };
  let next = () => {
    setSelectedIndex(
      selectedIndex == sliderdata.length - 1 ? 0 : selectedIndex + 1
    );
  };
  let prev = () => {
    setSelectedIndex(
      selectedIndex === 0 ? sliderdata.length - 1 : selectedIndex - 1
    );
  };

  const closeImageModal = () => {
    setShowDetail(false);
    setSelectedIndex(null);
  };

  return (
    <div className={styles.galleryconteiner}>
      <h1 className={styles.slidertitle}>
        See More Images of Vintage Products
      </h1>
      <div className={styles.sliderconteiner}>
        <button className="custom-prev">
          <MdKeyboardArrowLeft className={styles.icon} />
        </button>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}

          loop={true}
          slidesPerView={3}
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
          <MdKeyboardArrowRight className={styles.icon} />
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
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                border:'none'
              },
            },
          }}
        >
          <Box sx={style}>
            <ImageModal index={selectedIndex} onNext={next} onPrev={prev}  close={handleClose}/>
          </Box>
        </Modal>
      </div>
        
      ) : null}
    </div>
  );
}
