import React from "react";
import {
  Proj,
  ProjContainer,
  ContentContainer,
  VideoContainer,
  Video,
  TagsContainer,
  TagContainer,
  Tag,
  TagDescriptionContainer,
  TagDescription,
  Title,
  Description,
  TitleContainer,
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
        <ProjContainer>
          <TitleContainer>
            <Title>Pokedex API</Title>
            <Description>
              Simulated Pokedex from the game Pokemon, it holds data for all
              Pokemon in the game and can be fetched with API calls as well as
              making POST commands to add data to the API. Frontend is built in
              React.js to display the working API.
            </Description>
          </TitleContainer>
          <ContentContainer vidStart={vidStart}>
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
          </ContentContainer>
        </ProjContainer>
      </Proj>
    </>
  );
};

export default ProjectCard;
