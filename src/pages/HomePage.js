import React, { useState } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar/Navbar";
import { MobileNav } from "../components/MobileNav/MobileNav";
import HeroSection from "../components/HeroSection/HeroSection";
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
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} hasSlideLinks={true} />
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
