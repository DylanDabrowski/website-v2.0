import styled from "styled-components";

export const Proj = styled.div`
  /* border: solid 1px black; */
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ProjContainer = styled.div`
  /* border: solid 1px black; */
  display: grid;
  grid-auto-columns: minmax(1fr, 1fr);
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  grid-template-areas: ${({ vidStart }) =>
    vidStart ? `'col1 col2'` : `'col2 col1'`};
`;

export const VideoContainer = styled.div`
  /* border: solid 1px black; */
  margin-right: 100px;
  padding: 6px;
  border: 9px outset #ddd;
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
  box-shadow: 0 1px 10px #636363;
  grid-area: col1;
`;

export const Video = styled.video`
  width: 50rem;
`;

export const TagsContainer = styled.div`
  /* border: solid 1px black; */
  grid-area: col2;
`;

export const TagContainer = styled.div`
  /* border: solid 1px black; */
  display: flex;
  align-items: center;
  width: 25rem;
  justify-content: start;
  margin: 50px 50px;
`;

export const Tag = styled.div`
  /* border: solid 1px black; */
  display: flex;
  background: #ffffff;
  padding: 12px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px #636363;
  grid-area: col1;
`;

export const TagDescriptionContainer = styled.div`
  display: flex;
  margin: 0 20px;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  padding: 18px;
  background: #636363;
  color: white;
  box-shadow: 0 2px 10px #636363;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  grid-area: col2;

  ${Tag}:hover + & {
    opacity: 0.75;
  }
`;

export const TagDescription = styled.p`
  padding: 0 15px;
`;
