import React from "react";
import "./ProjectCard1.css";

const ProjectCard1 = ({ clip, Tag1Icon, Tag2Icon, tag1Desc, tag2Desc }) => {
  return (
    <>
      <div className="proj1">
        <div className="proj1__container">
          <div className="proj1__videoContainer">
            <video
              className="proj1__video"
              autoPlay
              loop
              muted
              src={clip}
              type="video/mp4"
            />
          </div>
          <div className="proj1__tagsContainer">
            <div className="proj1__tagContainer">
              <div className="proj1__tag">
                <Tag1Icon className="proj1__tagIcon" />
              </div>
              <div className="proj1__tagDescriptionContainer">
                <p className="proj1__tagDescription">{tag1Desc}</p>
              </div>
            </div>
            <div className="proj1__tagContainer">
              <div className="proj1__tag">
                <Tag2Icon className="proj1__tagIcon" />
              </div>
              <div className="proj1__tagDescriptionContainer">
                <p className="proj1__tagDescription">{tag2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard1;
