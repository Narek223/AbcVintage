import React from "react";
import dollImage from '../../../assets/VintageSpotlight/dollVintaje.png'
import vintageImage from '../../../assets/VintageSpotlight/vintage.png'
import cameraImage from '../../../assets/VintageSpotlight/VintageCamera.png'
import { useTranslation } from 'react-i18next'; 

export const useVintageItems = () => {
  const { t } = useTranslation(); 

return [

  {
    id:1,
  imgSrc: dollImage,
  title:t("VintageSpotlight.Elegance.title"),
  description: t("VintageSpotlight.Elegance.description"),
},
{
    id:2,
  imgSrc: vintageImage,
  title:t("VintageSpotlight.Mid-Century.title"),
  description: t("VintageSpotlight.Mid-Century.description"),
  isReversed: true,
},
{
    id:3,
  imgSrc: cameraImage,
  title: t("VintageSpotlight.TheCharm.title"),
  description:t("VintageSpotlight.TheCharm.description")
}
]
}
