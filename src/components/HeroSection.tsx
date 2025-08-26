import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start px-1 py-32 text-white md:py-48">
      <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
        The Future of Clinical Intelligence Today
      </h1>

      <p className="mt-6 max-w-xl text-xl text-white">
        Skolyn is an AI-powered operating system for diagnostic medicine. We
        empower clinicians with unparalleled accuracy, efficiency, and trust.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#demo"
          className="rounded-md bg-[#00A99D] px-6 py-3 text-base font-medium text-white hover:bg-[#0C9187] transition"
        >
          Request a Demo
        </a>
        <a
          href="#explore"
          className="rounded-md bg-[#00A99D] px-6 py-3 text-base font-medium text-white hover:bg-[#0C9187] transition"
        >
          Explore the Platform
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
