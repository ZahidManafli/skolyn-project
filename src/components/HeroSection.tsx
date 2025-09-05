import React from "react";
import { useTranslation } from "react-i18next";
import BackgroundVideo from "./BackgroundVideo";

const HeroSection: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* BG video sadece bu section içinde */}
      <BackgroundVideo
        src="/videos/BackgroundVideo.mp4"
        className="absolute inset-0 -z-10"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-white md:py-48">
        <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h1>

        <p className="mt-6 max-w-xl text-xl text-white">{t("hero.subtitle")}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#demo"
            className="rounded-md bg-[#00A99D] px-6 py-3 text-base font-medium text-white transition hover:bg-[#0C9187]"
          >
            {t("hero.cta_demo")}
          </a>
          <a
            href="#explore"
            className="rounded-md bg-[#00A99D] px-6 py-3 text-base font-medium text-white transition hover:bg-[#0C9187]"
          >
            {t("hero.cta_explore")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
