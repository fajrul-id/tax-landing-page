import React from "react";
import {
  Hero,
  LetsWorkTogether,
  OurBackground,
  OurExcellencePeople,
  OurService,
  OurValues,
} from "../../views";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <OurBackground />
      <OurService />
      <OurExcellencePeople />
      <OurValues />
      <LetsWorkTogether />
    </div>
  );
};

export default Home;
