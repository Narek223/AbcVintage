import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json'
import translationCz from './locales/cz.json'


const resources = {
    en: {
      translation: translationEN
    },
    cz: {
      translation: translationCz
    },
  };
  

i18n.use(initReactI18next).init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
