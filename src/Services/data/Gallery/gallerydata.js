import gallerydecor from "../../../assets/Gallery/GallaryDecorImg.png";
import vector from "../../../assets/Gallery/Vector.png";
import teaImg from "../../../assets/Gallery/miniTea.png";
import { useTranslation } from 'react-i18next'; 

export const useGalleryboxdata = () => {
  const { t } = useTranslation(); 

  return [
    {
      id: 1,
      title: t("gallery.section1.title"), 
      heading: t("gallery.section1.heading"), 
      description: t("gallery.section1.description"), 
      text: t("gallery.section1.text"), 
      vectorimg: vector,
      img: gallerydecor,
    },
    {
      id: 2,
      title: t("gallery.section2.title"),
      heading: t("gallery.section2.heading"),
      description: t("gallery.section2.description"),
      text: t("gallery.section2.text"),
      vectorimg: vector,
      img: teaImg,
      isReversed: true,
    },
  ];
};
