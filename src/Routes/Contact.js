import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import MainImage2 from "../Components/MainImage2/MainImage2";
import Form from "../Components/Form/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <MainImage2 heading="CONTACT." text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
