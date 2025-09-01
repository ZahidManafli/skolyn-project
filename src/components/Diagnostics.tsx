import React from "react";
import TriageIcon from "./TriageIcon";
import XAIcon from "./XAlcon";
import AnalysisIcon from "./AnalysisIcon";
import laptopImg from "../assets/img/diagnostics-laptop.png";
import bgImg from "../assets/img/diagnostics-bg.png"; 

const Diagnostics: React.FC = () => {
  return (
    <section
      className="relative
    bg-cover
    bg-[center_top_20%]   /* mobile: üstten odak */
    md:bg-center          /* md ve yukarısı: ortala */
    min-h-[420px] md:min-h-[560px]"
      style={{ backgroundImage: `url(${bgImg})` }} 
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-50">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#030F4F] md:text-4xl">
          An Integrated OS for Modern Diagnostics
        </h2>

        <div className="mt-10 grid items-center gap-12 md:mt-16 md:grid-cols-2">
          <ul className="space-y-10">
            {" "}
            <li className="flex items-start gap-4">
              {" "}
              <div className="mt-4 flex h-14 w-14 flex-none items-center justify-center">
                {" "}
                <TriageIcon className="w-full h-auto" />{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-lg font-semibold">
                  {" "}
                  AI-Powered Triage{" "}
                </h3>{" "}
                <p className="mt-1 text-sm leading-relaxed ">
                  {" "}
                  Our Smart Worklist automatically analyzes and prioritizes
                  every case in your queue, flagging potentially critical
                  findings so you can focus on patients who need you most, right
                  now.{" "}
                </p>{" "}
              </div>{" "}
            </li>{" "}
            <li className="flex items-start gap-4">
              {" "}
              <div className="mt-4 flex h-14 w-14 flex-none items-center justify-center">
                {" "}
                <XAIcon className="w-full h-auto" />{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-lg font-semibold ">
                  {" "}
                  Explainable AI (XAI){" "}
                </h3>{" "}
                <p className="mt-1 text-sm leading-relaxed ">
                  {" "}
                  See exactly what the AI sees. Our interactive heatmaps and
                  natural language justifications provide complete transparency,
                  turning the AI into a trusted collaborator.{" "}
                </p>{" "}
              </div>{" "}
            </li>{" "}
            <li className="flex items-start gap-4">
              {" "}
              <div className="mt-4 flex h-14 w-14 flex-none items-center justify-center">
                {" "}
                <AnalysisIcon className="w-full h-auto" />{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-lg font-semibold">
                  {" "}
                  Longitudinal Analysis{" "}
                </h3>{" "}
                <p className="mt-1 text-sm  leading-relaxed">
                  {" "}
                  Go beyond a single snapshot: compare current and prior scans
                  to quantify disease progression and treatment response with
                  objective data.{" "}
                </p>{" "}
              </div>{" "}
            </li>{" "}
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
