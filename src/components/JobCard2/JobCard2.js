import React from "react";
import "./JobCard2.css";

const JobCard2 = ({ company, position, description, img1, img2, img3 }) => {
  return (
    <>
      <div class="job2">
        <section class="job2__section">
          <img src={img1} class="job2__img1" alt="job img 1" />
          <h1 class="job2__company">{company}</h1>
          <h1 class="job2__title">{position}</h1>
          <img src={img2} class="job2__img2" alt="job img 2" />
          <div class="job2__content">
            <p class="job2__description">{description}</p>
          </div>
          <img src={img3} class="job2__img3" alt="job img 3" />
        </section>
      </div>
    </>
  );
};

export default JobCard2;
