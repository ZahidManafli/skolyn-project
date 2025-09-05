import React from "react";
import HeroSection from "../../components/HeroSection";
import TrustedBy from "../../components/TrustedBy";
import DataDriven from "../../components/DataDriven";
import Diagnostics from "../../components/Diagnostics";
import SkolynClinical from "../../components/SkolynClinical";
import BreastCancer from "../../components/BreastCancer";
import BoxPrinciple from "../../components/BoxPrincible";
import ForRadiologists from "../../components/ForRadiologists";
import Container from "../../components/Container";
const Home: React.FC = () => {
  return (
    <>
    <Container>
     <HeroSection />
      <TrustedBy />
      <DataDriven />
      <Diagnostics />
      <SkolynClinical />
      <BreastCancer />
      <BoxPrinciple />
      <ForRadiologists />
      </Container>
    </>
  );
};

export default Home;
