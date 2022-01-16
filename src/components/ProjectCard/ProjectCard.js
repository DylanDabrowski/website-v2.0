import React from "react";
import {
  Proj,
  ProjContainer,
  VideoContainer,
  Video,
  TagsContainer,
  TagContainer,
  Tag,
  TagDescriptionContainer,
  TagDescription,
} from "./ProjectCardElements.js";

const ProjectCard = ({
  clip,
  Tag1Icon,
  Tag2Icon,
  tag1Desc,
  tag2Desc,
  vidStart,
}) => {
  return (
    <>
      <Proj>
        <ProjContainer vidStart={vidStart}>
          <VideoContainer>
            <Video autoPlay loop muted src={clip} type="video/mp4" />
          </VideoContainer>
          <TagsContainer>
            <TagContainer>
              <Tag>
                <Tag1Icon font-size="75px" color="#232b2b" />
              </Tag>
              <TagDescriptionContainer>
                <TagDescription>{tag1Desc}</TagDescription>
              </TagDescriptionContainer>
            </TagContainer>
            <TagContainer>
              <Tag>
                <Tag2Icon font-size="75px" color="#232b2b" />
              </Tag>
              <TagDescriptionContainer>
                <TagDescription>{tag2Desc}</TagDescription>
              </TagDescriptionContainer>
            </TagContainer>
          </TagsContainer>
        </ProjContainer>
      </Proj>
    </>
  );
};

export default ProjectCard;
