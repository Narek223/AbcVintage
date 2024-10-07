import choose from "../../../assets/AboutUs/Choose.png";
import texture from "../../../assets/AboutUs/texture.png";
import shopingimg from "../../../assets/AboutUs/ShoppingStore.png";
import nextTexture from "../../../assets/AboutUs/Group (1).png";
import { useTranslation } from 'react-i18next'; 

export const useAboutData = () => {
  const { t } = useTranslation(); 

  return [
    {
      id: 1,
      imgsrc: choose,
      title: t('about.section1Title'),
      text: t('about.section1Text'), 
      textureimg: texture,
    },
    {
      id: 2,
      imgsrc: shopingimg,
      text: t('about.section2Text'), 
      textureimg: nextTexture,
      isReversed: true,
    },
  ];
};
