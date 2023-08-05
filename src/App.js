import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
