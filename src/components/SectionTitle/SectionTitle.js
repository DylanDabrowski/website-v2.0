import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ text }) => {
  return (
    <>
      <div className="sectionTitle">
        <h1 className="sectionTitle__text">{text}</h1>
      </div>
    </>
  );
};

export default SectionTitle;
