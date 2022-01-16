import React from "react";
import "./ProjectCard2.css";

const ProjectCard2 = ({ clip, Tag1Icon, Tag2Icon, tag1Desc, tag2Desc }) => {
  return (
    <>
      <div className="proj2">
        <div className="proj2__container">
          <div className="proj2__tagsContainer">
            <div className="proj2__tagContainer">
              <div className="proj2__tagDescriptionContainer">
                <p className="proj2__tagDescription">{tag1Desc}</p>
              </div>
              <div className="proj2__tag">
                <Tag1Icon className="proj2__tagIcon" />
              </div>
            </div>
            <div className="proj2__tagContainer">
              <div className="proj2__tagDescriptionContainer">
                <p className="proj2__tagDescription">{tag2Desc}</p>
              </div>
              <div className="proj2__tag">
                <Tag2Icon className="proj2__tagIcon" />
              </div>
            </div>
          </div>
          <div className="proj2__videoContainer">
            <video
              className="proj2__video"
              autoPlay
              loop
              muted
              src={clip}
              type="video/mp4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard2;
