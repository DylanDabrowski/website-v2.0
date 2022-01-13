import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ text, id }) => {
  return (
    <>
      <div className="sectionTitle" id={id}>
        <h1 className="sectionTitle__text">{text}</h1>
      </div>
    </>
  );
};

export default SectionTitle;
