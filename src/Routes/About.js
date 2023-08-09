import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import MainImage2 from "../Components/MainImage2/MainImage2";
import AboutContent from "../Components/AboutContent/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <MainImage2 heading="About." text="I'm a friendly Front-End Developer." />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
