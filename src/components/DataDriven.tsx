import React from "react";
import EfficiencyIcon from "./EfficiencyIcon";
import TrustIcon from "./TrustLogo";
import AccuracyIcon from "./AccuracyLogo";

type Card = {
  title: string;
  subtitle: string;
  text: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgClass?: string;
};

const defaultCards: Card[] = [
  {
    title: "Efficiency",
    subtitle: "The Challenge of Volume",
    text:
      "With diagnostic imaging volume projected to increase annually, clinicians face an unsustainable workload. Skolyn's workflow automation reduces manual reporting time by up to 50%, allowing specialists to focus on critical, high-value analysis.",
    bgClass: "bg-[#002366]",
    Icon: EfficiencyIcon,
  },
  {
    title: "Trust",
    subtitle: 'The "Black Box" Dilemma',
    text:
      "The adoption of AI in medicine is hindered by a lack of transparency. Our proprietary Explainable AI (XAI) is the antidote, providing a clear, auditable rationale for every finding to build unwavering clinical trust.",
    bgClass: "bg-[#124DA6]",
    Icon: TrustIcon,
  },
  {
    title: "Accuracy",
    subtitle: "The Quest for Consistency",
    text:
      "Diagnostic interpretation can vary. Skolyn provides a rigorously validated, data-driven baseline for every study, reducing inter-observer variability and standardizing the highest quality of care across your institution.",
    bgClass: "bg-[#236EDF]",
    Icon: AccuracyIcon,
  },
];

const PlaceholderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" />
    <path d="M24 10v14l8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

type Props = {
  heading?: string;
  cards?: Card[];
};

const DataDriven: React.FC<Props> = ({
  heading = "From Data Overload to Data-Driven Clarity.",
  cards = defaultCards,
}) => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold tracking-tight text-[#030F4F]">
          {heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.Icon ?? PlaceholderIcon;
            return (
              <article
                key={i}
                className={`rounded-2xl ${c.bgClass ?? "bg-[#1D56AC] "} text-white shadow-lg ring-1 ring-black/5 hover:bg-[#002366] transition`}
              >
                <div className="flex flex-col p-8 md:p-10">
                 
                  <div className="mb-6 flex justify-center text-white">
                    <Icon className="w-full max-w-[117px] h-auto" />
                  </div>

           
                  <h3 className="text-2xl font-semibold text-center">{c.title}</h3>
                  <p className="mt-2 text-xl font-medium text-white/90 text-center">
                    {c.subtitle}
                  </p>

                  <hr className="mt-4 border-white/20" />

                  
                  <p className="mt-6 leading-relaxed text-white/90 text-start">
                    {c.text}
                  </p>

                  <hr className="mt-8 border-white/20" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DataDriven;
