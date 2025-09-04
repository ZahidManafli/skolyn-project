// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_common from "./locales/en/common.json";
import az_common from "./locales/az/common.json";
import en_home from "./locales/en/home.json";
import az_home from "./locales/az/home.json";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en_common, home: en_home },
      az: { common: az_common, home: az_home }
    },
    supportedLngs: ["en", "az"],
    fallbackLng: "en",
    ns: ["common", "home"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") document.documentElement.lang = lng;
});

export default i18n;
