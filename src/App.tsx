import React from "react";
import Navbar from "./components/Navbar";

import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import DataDriven from "./components/DataDriven";
import Diagnostics from "./components/Diagnostics";
import SkolynClinical from "./components/SkolynClinical";
import BreastCancer from "./components/BreastCancer";
const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <HeroSection />

      <TrustedBy />
      <DataDriven />
      <Diagnostics />
      <SkolynClinical />
      <BreastCancer />
    </>
  );
};

export default App;
