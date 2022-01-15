import React, { useState } from "react";
import "./HomePage.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { PokedexAPICard } from "../components/ProjectCard/Data";
import Footer from "../components/Footer/Footer";

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
        <SectionTitle text={"Projects"} id={"projects"} />
        <ProjectCard {...PokedexAPICard} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
