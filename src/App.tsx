import React from "react";
import Navbar from "./components/Navbar";
import BackgroundVideo from "./components/BackgroundVideo";
import HeroSection from "./components/HeroSection";

const App: React.FC = () => {
  return (
    <>
      <BackgroundVideo src="/videos/BackgroundVideo.mp4" />

      <Navbar />

      <main className="pt-14">
        <HeroSection />
      </main>
    </>
  );
};

export default App;
