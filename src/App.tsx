import React from "react";
import Navbar from "./components/Navbar";

import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import DataDriven from "./components/DataDriven";
import Diagnostics from "./components/Diagnostics";
const App: React.FC = () => {
  return (
    <>
      <Navbar />

     
        <HeroSection />
     
      <TrustedBy />
      <DataDriven />
      <Diagnostics />
    </>
  );
};

export default App;
