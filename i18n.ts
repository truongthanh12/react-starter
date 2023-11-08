import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEn from "./app/locales/en/translations.json";
import translationVi from "./app/locales/vi/translations.json";
import translationAuthEn from "./app/locales/en/translationsAuth.json";
import translationAuthVi from "./app/locales/vi/translationsAuth.json";

export const defaultNS = "translationEn";
export const resources = {
  en: {
    home: translationEn,
    auth: translationAuthEn,
  },
  vi: {
    home: translationVi,
    auth: translationAuthVi,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources,
    fallbackLng: "en",
    debug: true,

    ns: [
      "translationEn",
      "translationVi",
      "translationAuthEn",
      "translationAuthVi",
    ],

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
