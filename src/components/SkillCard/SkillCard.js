import React from "react";
import "./SkillCard.css";
import FlutterIcon from "../../assets/images/FlutterIcon.png";
import ReactIcon from "../../assets/images/ReactIcon.png";
import ReactNativeIcon from "../../assets/images/ReactNativeIcon.png";
import DotnetIcon from "../../assets/images/DotnetIcon.png";
import SwiftIcon from "../../assets/images/SwiftIcon.png";
import KotlinIcon from "../../assets/images/KotlinIcon.png";
import HTML5CSS3Icon from "../../assets/images/HTML5CSS3Icon.png";
import JavaScriptIcon from "../../assets/images/JavaScriptIcon.png";
import PythonIcon from "../../assets/images/PythonIcon.png";
import GitIcon from "../../assets/images/GitIcon.png";
import FigmaIcon from "../../assets/images/FigmaIcon.png";
import AwsIcon from "../../assets/images/AwsIcon.png";

const SkillCard = ({}) => {
  return (
    <>
      <div className="skill">
        <div className="skill__container">
          <img src={ReactIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">React.js</h1>
        </div>
        <div className="skill__container">
          <img src={ReactNativeIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">React Native</h1>
        </div>
        <div className="skill__container">
          <img src={FlutterIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">Flutter</h1>
        </div>
        <div className="skill__container">
          <img src={DotnetIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">.NET Core</h1>
        </div>
        <div className="skill__container">
          <img src={SwiftIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">Swift</h1>
        </div>
        <div className="skill__container">
          <img src={KotlinIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">Kotlin</h1>
        </div>
        <div className="skill__container">
          <img src={HTML5CSS3Icon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">HTML CSS</h1>
        </div>
        <div className="skill__container">
          <img src={JavaScriptIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">Javascript</h1>
        </div>
        <div className="skill__container">
          <img src={PythonIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">Python</h1>
        </div>
        <div className="skill__container">
          <img src={GitIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">Git</h1>
        </div>
        <div className="skill__container">
          <img src={FigmaIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">Figma</h1>
        </div>
        <div className="skill__container">
          <img src={AwsIcon} alt="icon" className="skill__icon" />
          <h1 className="skill__title">AWS</h1>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
