import artdeco from '../../../assets/Benefits/artDecor.png';
import artdecoimg from "../../../assets/Benefits/artDecorImg.png";
import decor from "../../../assets/Benefits/artDeco(1).png";
import decorimg from "../../../assets/Benefits/artDeco(3).png";
import { useTranslation } from 'react-i18next';

export const useBenefitsData = () => {
  const { t } = useTranslation(); 

  return [
    {
      id: 1,
      title: t("benefits.curatedAuthenticity.title"),
      img: artdecoimg,
      text: t("benefits.curatedAuthenticity.text"), 
    },
    {
      id: 2,
      title: t("benefits.diverseSelection.title"),
      img: decor,
      text: t("benefits.diverseSelection.text"),
    },
    {
      id: 3,
      title: t("benefits.sustainableShopping.title"),
      img: artdeco,
      text: t("benefits.sustainableShopping.text"),
    },
    {
      id: 4,
      title: t("benefits.customerExperience.title"),
      img: decorimg,
      text: t("benefits.customerExperience.text"),
    },
  ];
};
