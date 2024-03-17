import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Typings
import { LanguageList } from "@/typings/i18next";

// Constants
import { DEFAULT_LANGUAGE } from "@/constants/languages";

// Locales
import enCommon from "@/assets/locales/en/common.json";
import itCommon from "@/assets/locales/it/common.json";

export const defaultNS = "common";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      it: { common: itCommon },
    },
    ns: ["common"],
    defaultNS: ["common"],
    detection: {
      order: ["path", "localStorage", "htmlTag", "cookie"],
      caches: ["localStorage"],
    },
    supportedLngs: Object.values(LanguageList),
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  });
