// src/components/SkolynClinical.tsx
import React from "react";
import WorkflowLogo from "./WorkflowLogo";
import ModulesLogo from "./ModulesLogo";
import XalLogo from "./XalLogo";
import SkolynLogo from "./SkolynLogo";
import BeyondIcon from "./BeyondIcon";
import CoreIcon from "./CoreIcon";
import BuildIcon from "./BuildIcon";
const SkolynClinical: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F4F7FB]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="pt-10 text-center text-2xl md:text-4xl font-extrabold leading-tight text-[#142961]">
          The Skolyn Clinical Intelligence OS: Your Central
          <br className="hidden sm:block" />
          Command for Diagnostics
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative place-items-center">
          <div className="flex items-start justify-center sm:justify-start">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 aspect-square shrink-0">
              <ModulesLogo className="w-full h-full" />
            </div>
          </div>

          <div className="flex items-start justify-center sm:justify-end">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 aspect-square shrink-0">
              <XalLogo className="w-full h-full" />
            </div>
          </div>

          <div className="sm:col-span-2 -mt-4 md:-mt-20 flex items-center justify-center">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 aspect-square shrink-0">
              <SkolynLogo className="w-full h-full" />
            </div>
          </div>

          <div className="sm:col-span-2 flex items-center justify-center mt-2">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 aspect-square shrink-0">
              <WorkflowLogo className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6 pb-12">
          <div className="max-w-[720px] rounded-2xl md:rounded-[22px] px-5 py-4 md:px-6 md:py-5 shadow-lg bg-[#124DA6] text-[#212529]">
            <div className="flex items-start gap-3">
              <BeyondIcon className="h-6 w-6 flex-shrink-0" />

              <div>
                <h3 className="text-base md:text-lg font-semibold">
                  Beyond a Tool, An Ecosystem
                </h3>
                <p className="mt-1 text-sm leading-relaxed">
                  A detailed explanation of how Skolyn integrates the entire
                  diagnostic workflow.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex md:justify-end">
            <div className="w-full md:max-w-[720px] rounded-2xl md:rounded-[22px] px-5 py-4 md:px-6 md:py-5 shadow-lg bg-[#236EDF] text-[#212529]">
              <div className="flex items-start gap-3">
                <CoreIcon className="h-6 w-6 flex-shrink-0" />

                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    The Core Pillars
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed">
                    A visual breakdown of the three pillars: Diagnostic AI,
                    Explainable Trust Layer, and Workflow Automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[720px] rounded-2xl md:rounded-[22px] px-5 py-4 md:px-6 md:py-5 shadow-lg bg-[#6498E5] text-[#212529]">
            <div className="flex items-start gap-3">
              <BuildIcon className="h-6 w-6 flex-shrink-0" />

              <div>
                <h3 className="text-base md:text-lg font-semibold">
                  Built for the Future
                </h3>
                <p className="mt-1 text-sm leading-relaxed">
                  Discusses the platform’s modularity and readiness for future
                  technologies like multi-modal fusion and radiogenomics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkolynClinical;
