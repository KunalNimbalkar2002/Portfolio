import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import MainImage2 from "../Components/MainImage2/MainImage2";
import PricingCard from "../Components/PricingCard/PricingCard";
import WorkCard from "../Components/WorkCard/WorkCard";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <MainImage2 heading="PROJECTS." text="Some of my most recent works" />
      <WorkCard />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Projects;
