import React from "react";
import { useTranslation, Trans } from "react-i18next";

import visual1 from "../assets/img/visual-1.png";
import visual2 from "../assets/img/visual-2.png";

const VIDEO_SRC = "/videos/box.mp4";

const BoxPrincible: React.FC = () => {
  const { t } = useTranslation("boxPrincible");

  const tableHeaders = t("uncertainty.table.headers", {
    returnObjects: true,
  }) as string[];
  const tableRows = t("uncertainty.table.rows", {
    returnObjects: true,
  }) as string[][];
  const clinicalItems = t("audiences.clinical.items", {
    returnObjects: true,
  }) as string[];
  const managementItems = t("audiences.management.items", {
    returnObjects: true,
  }) as string[];
  const researchItems = t("audiences.research.items", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="w-full text-white">
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-7 text-center">
          <h2 className="text-2xl font-extrabold leading-tight md:text-3xl">
            <Trans
              i18nKey="heading"
              ns="boxPrincible"
              components={{ br: <br className="hidden sm:block" /> }}
            />
          </h2>
        </div>

        <div className="relative w-full bg-transparent">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              className="h-full w-full object-cover"
              src={VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
          <div className="relative z-20 mx-auto max-w-7xl px-4">
            <div className="pt-[38%] md:pt-[52%]" />
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 pb-12">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">
            {t("necessity.title")}
          </h3>
          <p className="max-w-4xl text-xs text-gray-300 md:text-sm">
            {t("necessity.text")}
          </p>
        </div>
      </div>

      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 pb-10">
          <h3 className="mb-4 text-lg font-semibold md:text-xl">
            {t("visual.title")}
          </h3>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <div className="flex flex-col items-center">
              <img
                src={visual1}
                alt={t("visual.alt_standard")}
                className="w-full max-w-[150px] rounded-lg md:max-w-[382px]"
                loading="lazy"
              />
              <p className="mt-2 text-center text-[11px] text-gray-400 md:text-xs">
                <Trans i18nKey="visual.caption_standard" ns="boxPrincible" />
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={visual2}
                alt={t("visual.alt_ai")}
                className="w-full max-w-[300px] rounded-lg md:max-w-[968px]"
                loading="lazy"
              />
              <p className="mt-2 text-center text-[11px] text-gray-400 md:text-xs">
                <Trans i18nKey="visual.caption_ai" ns="boxPrincible" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-black to-[#0B0F14]">
        <div className="mx-auto max-w-5xl px-4 pb-12">
          <h3 className="mb-4 text-lg font-semibold md:text-xl">
            {t("textual.title")}
          </h3>

          <div className="rounded-xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-lg md:p-6">
            <p className="text-sm text-gray-200 md:text-base">
              <span className="font-semibold">
                {t("textual.example_en_label")}:
              </span>{" "}
              {t("textual.example_en_text")}
            </p>
            <div className="my-4 h-px w-full bg-white/10" />
            <p className="text-sm text-gray-200 md:text-base">
              <span className="font-semibold">
                {t("textual.example_az_label")}:
              </span>{" "}
              {t("textual.example_az_text")}
            </p>
          </div>

          <p className="mt-2 text-center text-[10px] italic text-gray-400 md:text-[11px]">
            {t("textual.footnote")}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#0B0F14] via-[#23324E] to-[#506C6B]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h3 className="text-lg font-semibold md:text-xl">
            {t("uncertainty.title")}
          </h3>
          <p className="mt-3 max-w-4xl text-sm text-gray-200 md:text-base">
            {t("uncertainty.desc")}
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-[325px] w-2/3 border-collapse">
              <thead>
                <tr className="bg-[#0C1A4A] text-[13px]">
                  {tableHeaders.map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {tableRows.map((row, i) => (
                  <tr key={i} className="odd:bg-white/5 even:bg-white/10">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              <h4 className="text-lg font-semibold">
                {t("audiences.clinical.title")}
              </h4>
              <ul className="mt-3 space-y-1 text-sm text-gray-200">
                {clinicalItems.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              <h4 className="text-lg font-semibold">
                {t("audiences.management.title")}
              </h4>
              <ul className="mt-3 space-y-1 text-sm text-gray-2 00">
                {managementItems.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              <h4 className="text-lg font-semibold">
                <Trans ns="boxPrincible" i18nKey="audiences.research.title" />
              </h4>
              <ul className="mt-3 space-y-1 text-sm text-gray-200">
                {researchItems.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxPrincible;
