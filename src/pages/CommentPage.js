import React, { useState } from "react";
import "./CommentPage.css";
import Navbar from "../components/Navbar/Navbar";
import { MobileNav } from "../components/MobileNav/MobileNav";
import CommentBox from "../components/CommentBox/CommentBox";

const CommentPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} hasSlideLinks={false} />
      <div className="comment">
        <CommentBox />
      </div>
    </>
  );
};

export default CommentPage;
