import React from "react";
import TriageIcon from "./TriageIcon";
import XAIcon from "./XAlcon";
import AnalysisIcon from "./AnalysisIcon";
import laptopImg from "../assets/img/diagnostics-laptop.png";
import bgImg from "../assets/img/diagnostics-bg.png";
import { useTranslation } from "react-i18next";

const Diagnostics: React.FC = () => {
  const { t } = useTranslation("diagnostics");

  const items = t("items", { returnObjects: true }) as Array<{
    title: string;
    text: string;
  }>;

  const icons = [TriageIcon, XAIcon, AnalysisIcon];

  return (
    <section
      className="relative bg-cover bg-[center_top_20%] md:bg-center min-h-[420px] md:min-h-[560px]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-50">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#030F4F] md:text-4xl">
          {t("heading")}
        </h2>

        <div className="mt-10 grid items-center gap-12 md:mt-16 md:grid-cols-2">
          <ul className="space-y-10">
            {items.map((item, i) => {
              const Icon = icons[i];
              return (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-4 flex h-14 w-14 flex-none items-center justify-center">
                    <Icon className="h-auto w-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="relative">
            <img
              src={laptopImg}
              alt="Diagnostics Laptop"
              className="mx-auto w-full max-w-[560px] drop-shadow-[0_30px_35px_rgba(0,0,0,0.25)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostics;
