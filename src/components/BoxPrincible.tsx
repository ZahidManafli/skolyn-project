import React from "react";

import visual1 from "../assets/img/visual-1.png";
import visual2 from "../assets/img/visual-2.png";

const VIDEO_SRC = "/videos/box.mp4";

const BoxPrinciple: React.FC = () => {
  return (
    <section className="w-full text-white">
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-7 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
            The Glass Box Principle:
            <br className="hidden sm:block" />
            Our Unwavering Commitment to Trust
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
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            The Necessity of Explainable AI in Medicine
          </h3>
          <p className="text-xs md:text-sm text-gray-300 max-w-4xl">
            Explainable AI (XAI) ensures clinicians understand, trust, and
            verify AI-driven decisions, improving patient safety and care
            quality.
          </p>
        </div>
      </div>

      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 pb-10">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Visual Justification: Seeing Through the AI&apos;s Eyes
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <img
                src={visual1}
                alt="Standard MRI View"
                className="w-full max-w-[150px] md:max-w-[382px] rounded-lg"
              />
              <p className="mt-2 text-[11px] md:text-xs text-gray-400 text-center">
                Standard MRI View <br />
                (Unprocessed)
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={visual2}
                alt="AI-Enhanced MRI with Segmentation & Heatmap Overlay"
                className="w-full max-w-[300px] md:max-w-[968px] rounded-lg"
              />
              <p className="mt-2 text-[11px] md:text-xs text-gray-400 text-center">
                AI-Enhanced MRI with Segmentation <br />
                &amp; Heatmap Overlay
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-black to-[#0B0F14]">
        <div className="mx-auto max-w-5xl px-4 pb-12">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Textual Justification: The AI&apos;s Rationale in Your Language
          </h3>

          <div className="rounded-xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-4 md:p-6 shadow-lg">
            <p className="text-sm md:text-base text-gray-200">
              <span className="font-semibold">English:</span> The lesion in the
              left hemisphere shows high probability of demyelination based on
              voxel intensity analysis.
            </p>
            <div className="my-4 h-px w-full bg-white/10" />
            <p className="text-sm md:text-base text-gray-200">
              <span className="font-semibold">Azerbaijani:</span> Sol
              hemisferdəki lezyon voxellərin intensivliyinə əsasən
              demielinasiyaya ehtimalının yüksək olduğunu göstərir.
            </p>
          </div>

          <p className="mt-2 text-[10px] md:text-[11px] text-gray-400 italic text-center">
            *These textual examples allow clinicians to understand the AI&apos;s
            reasoning in their own language.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#0B0F14] via-[#23324E] to-[#506C6B]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h3 className="text-lg md:text-xl font-semibold">
            Uncertainty Quantification: The AI Knows What It Doesn&apos;t Know
          </h3>
          <p className="mt-3 text-sm md:text-base text-gray-200 max-w-4xl">
            By quantifying uncertainty, the AI signals cases that require
            further human review. Confidence scores allow clinicians to
            prioritize high-risk or ambiguous cases, improving patient safety
            and optimizing workflow efficiency.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-[325px] w-2/3 border-collapse">
              <thead>
                <tr className="bg-[#0C1A4A] text-[13px]">
                  <th className="px-4 py-3 text-left font-semibold">
                    Confidence Score
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Review Priority
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Action Required
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    score: "95%",
                    priority: "Low",
                    action: "Routine follow-up",
                  },
                  {
                    score: "75%",
                    priority: "Medium",
                    action: "Standard review",
                  },
                  {
                    score: "55%",
                    priority: "High",
                    action: "Immediate clinician review",
                  },
                  {
                    score: "30%",
                    priority: "Critical",
                    action: "Urgent intervention",
                  },
                ].map((row, i) => (
                  <tr key={i} className="odd:bg-white/5 even:bg-white/10">
                    <td className="px-4 py-3">{row.score}</td>
                    <td className="px-4 py-3">{row.priority}</td>
                    <td className="px-4 py-3">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.4)] p-6 rounded-lg">
              <h4 className="font-semibold text-lg">For Clinical Practice:</h4>
              <ul className="mt-3 space-y-1 text-sm text-gray-200">
                <li>Radiologists</li>
                <li>Oncologists</li>
                <li>Surgeons</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              <h4 className="font-semibold text-lg">
                For Hospital Management:
              </h4>
              <ul className="mt-3 space-y-1 text-sm text-gray-200">
                <li>Administrators</li>
                <li>IT Departments</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              <h4 className="font-semibold text-lg">
                For Research &amp; Pharma:
              </h4>
              <ul className="mt-3 space-y-1 text-sm text-gray-200">
                <li>Academic Researchers</li>
                <li>CROs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxPrinciple;
