import React from "react";
import kobiaLogo from "../assets/img/Kobia.png";
import uniLogo from "../assets/img/UniLogo.png";
import onkologiaLogo from "../assets/img/Onkologia.png";
import googleLogo from "../assets/img/GoogleLogo.png";

const TrustedBy: React.FC = () => {
  return (
    <section className="w-full bg-white ">
      <div className="mx-auto max-w-7xl boder-b  ">
        <h2 className="text-start text-5xl font-bold text-[#030F4F] pt-10">
          Trusted By Our Strategic Partners
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 items-center justify-items-center md:grid-cols-3">
          <img src={kobiaLogo} alt="KOBİ" className=" object-contain" />

          <img
            src={uniLogo}
            alt="Azerbaycan Tibb Universiteti"
            className=" object-contain"
          />

          <div className="flex flex-col items-center gap-20">
            <img
              src={onkologiaLogo}
              alt="Milli Onkologiya Mərkəzi"
              className="object-contain"
            />
            <img
              src={googleLogo}
              alt="Google for Startups"
              className=" object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
