import React from "react";
import bgImage from "../assets/img/radiologists-bg.png";
import MorningIcon from "./MorningIcon";
import DiagnosisIcon from "./DiagnosisIcon";
import ReportIcon from "./ReportIcon";
import CollaborationIcon from "./CollaborationIcon";
import { useTranslation, Trans } from "react-i18next";

type Step = {
  title: string;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const iconMap: Array<Step["Icon"]> = [
  MorningIcon,
  DiagnosisIcon,
  ReportIcon,
  CollaborationIcon,
];

const ForRadiologists: React.FC = () => {
  const { t } = useTranslation("forRadiologists");

  const heroTitle = t("hero.title");
  const heroAlt = t("hero.alt");

  const tableHeaders =
    (t("table.headers", { returnObjects: true }) as string[]) ?? [];
  const tableRows =
    (t("table.rows", { returnObjects: true }) as string[][]) ?? [];

  const dayTitle = t("day.title");
  const dayText = t("day.text");

  const stepsI18n =
    (t("steps", { returnObjects: true }) as Array<{
      title: string;
      text: string;
    }>) ?? [];

  const quoteTitle = t("quote.title");

  return (
    <section className="relative w-full text-white">
      <img
        src={bgImage}
        alt={heroAlt}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="lazy"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl font-extrabold text-[#0B1F45] drop-shadow md:text-3xl">
          {heroTitle}
        </h2>

        <div className="mt-6 overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur-sm max-w-3xl">
          <div className="grid grid-cols-2 bg-[#0B1F45] text-[13px] font-semibold md:text-sm">
            <div className="px-3 py-2">{tableHeaders[0]}</div>
            <div className="px-3 py-2">{tableHeaders[1]}</div>
          </div>
          <div className="grid grid-cols-2 divide-y divide-white/10 text-xs md:text-sm">
            {tableRows.map((r, i) => (
              <React.Fragment key={i}>
                <div className="px-3 py-3">{r[0]}</div>
                <div className="px-3 py-3">{r[1]}</div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[28px] bg-white/20 ring-1 ring-white/25 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <div className="px-5 py-8 md:px-10 md:py-10">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#142961] md:text-2xl">
                {dayTitle}
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-white/90 md:text-base">
                {dayText}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stepsI18n.map(({ title, text }, idx) => {
                const Icon = iconMap[idx] ?? MorningIcon;
                return (
                  <div key={idx} className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 ring-1 ring-white/30 shadow-[0_0_15px_rgba(0,0,0,0.35)]">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-[#101c44] font-semibold">{title}</h4>
                    <p className="mt-1 text-black/90 text-sm">{text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <h4 className="text-lg font-semibold text-[#142961]">
                {quoteTitle}
              </h4>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-white/90 italic md:text-base">
                <Trans i18nKey="quote.text_html" ns="forRadiologists" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRadiologists;
