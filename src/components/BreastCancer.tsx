import React from "react";
import clinicalImg from "../assets/img/cancer1.png";
import clinicalImg2 from "../assets/img/cancer2.png";
import ThreedIcon from "./ThreedIcon";
import PoweredIcon from "./PoweredIcon";
import QuanIcon from "./QuanIcon";
import CheckIcon from "./CheckIcon";
import { useTranslation, Trans } from "react-i18next";

const BreastCancerDiagnostics: React.FC = () => {
  const { t } = useTranslation("breastCancer");

  const featureTexts = t("features", { returnObjects: true }) as string[];
  const featureIcons = [ThreedIcon, PoweredIcon, QuanIcon];

  const impactItems = t("impact.items", { returnObjects: true }) as string[];

  return (
    <section className="bg-gradient-to-b from-[#13161A] to-[#030F4F] text-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center border-b border-white pb-4">
          {t("heading")}
        </h2>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={clinicalImg}
              alt={t("alt.hero")}
              className="w-full max-w-xl rounded-lg"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold underline decoration-white underline-offset-8 md:text-2xl">
              {t("clinical.title")}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              {t("clinical.text")}
            </p>

            <h3 className="mb-3 text-xl font-semibold underline decoration-white underline-offset-8 md:text-2xl">
              {t("solution.title")}
            </h3>
            <ul className="space-y-3 text-sm text-white">
              {featureTexts.map((text, i) => {
                const Icon = featureIcons[i] ?? ThreedIcon;
                return (
                  <li
                    key={i}
                    className="flex items-center gap-2 border-b border-gray-600 p-2"
                  >
                    <Icon className="h-5 w-5 flex-shrink-0 text-[#00A99D]" />
                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <h3 className="mt-16 text-center text-xl font-semibold underline decoration-white underline-offset-8 md:text-2xl">
          {t("insight.title")}
        </h3>

        <div className="mt-8 flex justify-center">
          <img
            src={clinicalImg2}
            alt={t("alt.insight")}
            className="w-full max-w-xl rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>

        <div className="mt-2 flex items-start justify-center gap-8 md:gap-56">
          <p className="mt-3 text-center text-sm text-gray-400">
            <Trans i18nKey="insight.caption_standard" ns="breastCancer" />
          </p>
          <p className="mt-3 text-center text-sm text-gray-400">
            <Trans i18nKey="insight.caption_ai" ns="breastCancer" />
          </p>
        </div>

        <div className="mt-12">
          <h3 className="pb-2 text-xl font-semibold underline decoration-white underline-offset-8 md:text-2xl">
            {t("impact.title")}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white">
            {impactItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-20 text-center text-white">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {t("cta.title")}
        </h2>
        <p className="mt-6 text-base text-[#D9D9D9] md:text-lg">
          {t("cta.text")}
        </p>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-[#00A99D] px-6 py-3 text-sm font-medium text-white shadow-[0_6px_0_rgba(0,0,0,0.25)] transition hover:bg-[#0C9187] active:translate-y-[1px] md:text-base"
        >
          {t("cta.button")}
        </a>
      </div>
    </section>
  );
};

export default BreastCancerDiagnostics;
