import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en_common from "./locales/en/common.json";
import az_common from "./locales/az/common.json";
import en_home from "./locales/en/home.json";
import az_home from "./locales/az/home.json";
import en_trustedby from "./locales/en/trustedby.json";
import az_trustedby from "./locales/az/trustedby.json";
import en_datadriven from "./locales/en/datadriven.json";
import az_datadriven from "./locales/az/datadriven.json";
import en_diagnostics from "./locales/en/diagnostics.json";
import az_diagnostics from "./locales/az/diagnostics.json";
import en_skolynclinical from "./locales/en/skolynclinical.json";
import az_skolynclinical from "./locales/az/skolynclinical.json";
import en_breastCancer from "./locales/en/breastCancer.json";
import az_breastCancer from "./locales/az/breastCancer.json";
import en_boxPrincible from "./locales/en/boxPrincible.json";
import az_boxPrincible from "./locales/az/boxPrincible.json";
import en_forRadiologists from "./locales/en/forRadiologists.json";
import az_forRadiologists from "./locales/az/forRadiologists.json";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en_common, home: en_home, trustedby: en_trustedby, datadriven: en_datadriven, diagnostics: en_diagnostics, skolynclinical: en_skolynclinical, breastCancer: en_breastCancer, boxPrincible: en_boxPrincible, forRadiologists: en_forRadiologists},
      az: { common: az_common, home: az_home, trustedby: az_trustedby, datadriven: az_datadriven, diagnostics: az_diagnostics, skolynclinical: az_skolynclinical, breastCancer: az_breastCancer, boxPrincible: az_boxPrincible, forRadiologists: az_forRadiologists},
    },
    supportedLngs: ["en", "az"],
    fallbackLng: "en",
    ns: ["common", "home", "trustedby", "datadriven", "diagnostics", "skolynclinical", "breastCancer", "boxPrincible", "forRadiologists"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") document.documentElement.lang = lng;
});

export default i18n;
