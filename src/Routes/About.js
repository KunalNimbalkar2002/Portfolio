import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import MainImage2 from "../Components/MainImage2/MainImage2";

const About = () => {
  return (
    <div>
      <Navbar />
      <MainImage2 heading="About." text="I'm a friendly Front-End Developer." />
      <Footer />
    </div>
  );
};

export default About;
