import React from "react";
import "./ProjectCard.css";
import PokedexClip from "../../assets/videos/pokedexapi-web-clip.mp4";
import { SiDotnet, SiReact } from "react-icons/si";

const ProjectCard = () => {
  return (
    <>
      <div className="proj">
        <div className="proj__container">
          <div className="proj__videoContainer">
            <video
              className="proj__video"
              autoPlay
              loop
              muted
              src={PokedexClip}
              type="video/mp4"
            />
          </div>
          <div className="proj__tagsContainer">
            <div className="proj__tagContainer">
              <div className="proj__tag">
                <SiReact className="proj__tagIcon" />
              </div>
              <div className="proj__tagDescriptionContainer">
                <p className="proj__tagDescription">
                  Frontend made in React.js
                </p>
              </div>
            </div>
            <div className="proj__tagContainer">
              <div className="proj__tag">
                <SiDotnet className="proj__tagIcon" />
              </div>
              <div className="proj__tagDescriptionContainer">
                <p className="proj__tagDescription">
                  Backend API made with .NET
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
