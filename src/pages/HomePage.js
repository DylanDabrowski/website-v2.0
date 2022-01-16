import React, { useState } from "react";
import "./HomePage.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import ProjectCard1 from "../components/ProjectCard/ProjectCard1.js";
import ProjectCard2 from "../components/ProjectCard/ProjectCard2";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Footer from "../components/Footer/Footer";

import { PokedexAPICard } from "../components/ProjectCard/Data.js";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <HeroSection />
      <div className="home__projects">
        <SectionTitle text={"Current Projects"} id={"projects"} />
        <ProjectCard1 {...PokedexAPICard} />
        <ProjectCard2 {...PokedexAPICard} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
