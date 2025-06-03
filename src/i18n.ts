import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../locales/translation.en.json";
import esTranslations from "../locales/translation.es.json";
import caTranslations from "../locales/translation.ca.json";


i18n.use(initReactI18next).init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: enTranslations,
        },
        es: {
            translation: esTranslations,
        },
        ca: {
            translation: caTranslations,
        },
    },
});

export default i18n;
