import React, { useState } from "react";
import "./HomePage.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import ProjectCard from "../components/ProjectCard/ProjectCard.js";
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
        <ProjectCard {...PokedexAPICard} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
