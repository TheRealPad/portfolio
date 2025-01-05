import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { Language } from "./languages";
import translationEN from "./en.json";
import translationFR from "./fr.json";

const defaultLanguage = Language.EN;
const storageName = "pad-portfolio-language";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem(storageName) || defaultLanguage,

    keySeparator: ".",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
export { storageName };
