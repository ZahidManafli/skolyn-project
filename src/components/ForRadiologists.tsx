import React from "react";

import bgImage from "../assets/img/radiologists-bg.png";

import MorningIcon from "./MorningIcon";
import DiagnosisIcon from "./DiagnosisIcon";
import ReportIcon from "./ReportIcon";
import CollaborationIcon from "./CollaborationIcon";

type Step = {
  title: string;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const steps: Step[] = [
  {
    title: "Morning Review",
    text: "Start your day with AI-prioritized worklists.",
    Icon: MorningIcon,
  },
  {
    title: "AI-Assisted Diagnosis",
    text: "Skolyn highlights critical cases and provides instant insights.",
    Icon: DiagnosisIcon,
  },
  {
    title: "Report Automation",
    text: "50% of your reporting workflow is automated.",
    Icon: ReportIcon,
  },
  {
    title: "Collaboration & Follow-Up",
    text: "Share findings and track patient progress efficiently.",
    Icon: CollaborationIcon,
  },
];

const ForRadiologists: React.FC = () => {
  return (
    <section className="relative w-full text-white ">
      <img
        src={bgImage}
        alt="Doctor using AI tools"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-[#0B1F45] drop-shadow">
          For Radiologists: Reclaim Your Time, Enhance Your Confidence
        </h2>

        <div className="mt-6 max-w-3xl bg-white/5 backdrop-blur-sm rounded-lg ring-1 ring-white/10 overflow-hidden">
          <div className="grid grid-cols-2 text-[13px] md:text-sm font-semibold bg-[#0B1F45]">
            <div className="px-3 py-2">Problem</div>
            <div className="px-3 py-2">Solution</div>
          </div>
          <div className="grid grid-cols-2 text-xs md:text-sm divide-y divide-white/10">
            <div className="px-3 py-3">Reporting backlog and burnout</div>
            <div className="px-3 py-3">
              Automate 50% of your reporting workflow
            </div>

            <div className="px-3 py-3">
              Diagnostic uncertainty in complex cases
            </div>
            <div className="px-3 py-3">
              Leverage an instant, data-driven second opinion
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] bg-white/20 backdrop-blur-md ring-1 ring-white/25 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <div className="px-5 py-8 md:px-10 md:py-10">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#142961]">
                A Day in Your Life with Skolyn
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/90 max-w-2xl mx-auto">
                Experience how Skolyn seamlessly streamlines your daily
                workflow, from patient review to reporting and follow-up
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ title, text, Icon }) => (
                <div key={title} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 ring-1 ring-white/30 shadow-[0_0_15px_rgba(0,0,0,0.35)]">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#101c44]">{title}</h4>
                  <p className="mt-1 text-sm text-black/90">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <h4 className="text-lg font-semibold text-[#142961]">
                What Our Users Say
              </h4>
              <p className="mt-2 text-sm text-white/90 max-w-xl mx-auto italic">
                “Skolyn has transformed my workflow, allowing me to focus on the
                most critical cases first.” <br />—{" "}
                <span className="not-italic">Dr. Jane Smith, Radiologist</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRadiologists;
