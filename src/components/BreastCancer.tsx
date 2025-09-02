import React from "react";
import clinicalImg from "../assets/img/cancer1.png";
import clinicalImg2 from "../assets/img/cancer2.png";
import ThreedIcon from "./ThreedIcon";
import PoweredIcon from "./PoweredIcon";
import QuanIcon from "./QuanIcon";
import CheckIcon from "./CheckIcon";

const features = [
  { text: "Automated Lesion Detection & 3D Segmentation", Icon: ThreedIcon },
  { text: "AI-Powered BI-RADS® Classification", Icon: PoweredIcon },
  { text: "Quantitative Morphological & Kinetic Analysis", Icon: QuanIcon },
];

const items = [
  "Improved detection rates",
  "Reduced false-positive recalls",
  "Standardized reporting",
];

const BreastCancerDiagnostics: React.FC = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#13161A] to-[#030F4F] text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center border-b border-white pb-4">
            Precision AI for Breast Cancer Diagnostics
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src={clinicalImg}
                alt="Breast Cancer Diagnostics"
                className="max-w-xl w-full rounded-lg"
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 underline underline-offset-8 decoration-white">
                The Clinical Challenge
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Detecting lesions in dense breast tissue is often complicated by
                overlapping anatomical structures, subtle tissue variations, and
                high inter-patient variability, which can lead to delayed or
                missed diagnoses.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold mb-3 underline underline-offset-8 decoration-white">
                The Skolyn Solution: Key AI Capabilities
              </h3>
              <ul className="space-y-3 text-sm text-white">
                {features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 border-b border-gray-600 p-2"
                  >
                    <item.Icon className="h-5 w-5 text-[#00A99D] flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mt-16 text-xl md:text-2xl font-semibold text-center underline underline-offset-8 decoration-white">
            A New Level of Insight
          </h3>

          <div className="mt-8 flex justify-center">
            <img
              src={clinicalImg2}
              alt="AI-Enhanced MRI"
              className="max-w-xl w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="mt-2 flex justify-center items-start gap-8 md:gap-56">
            <p className="mt-3 text-sm text-gray-400 text-center">
              Standard MRI View <br /> (Unprocessed)
            </p>
            <p className="mt-3 text-sm text-gray-400 text-center">
              AI-Enhanced MRI with Segmentation <br /> &amp; Heatmap Overlay
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-semibold underline underline-offset-8 decoration-white pb-2">
              Clinical Impact
            </h3>
            <ul className="mt-4 space-y-2 text-white text-sm">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 text-center text-white py-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Ready to Lead the Future of Medicine?
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#D9D9D9]">
            Discover how Skolyn can elevate your institution&apos;s diagnostic
            capabilities and deliver the future of patient care.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-[#00A99D] px-6 py-3 text-sm md:text-base font-medium text-white shadow-[0_6px_0_rgba(0,0,0,0.25)] hover:bg-[#0C9187] active:translate-y-[1px] transition"
          >
            Schedule a Personalized Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default BreastCancerDiagnostics;
