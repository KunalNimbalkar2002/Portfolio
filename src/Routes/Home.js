import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import MainImg from "../Components/MainImg/MainImg";
import Footer from "../Components/Footer/Footer";
import Work from "../Components/Work/Work";

const Home = () => {
  return (
    <div style={{ display: "block" }}>
      <Navbar />
      <MainImg />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
