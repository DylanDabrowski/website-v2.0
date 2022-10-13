import React from "react";
import "./JobCard1.css";

const JobCard1 = ({ id, company, position, description, img1, img2, img3 }) => {
  return (
    <>
      <div class="job1" id={id}>
        <section class="job1__section">
          <img src={img1} class="job1__img1" alt="job img 1" />
          <h1 class="job1__company">{company}</h1>
          <h1 class="job1__title">{position}</h1>
          <img src={img2} class="job1__img2" alt="job img 2" />
          <div class="job1__content">
            <p class="job1__description">{description}</p>
          </div>
          <img src={img3} class="job1__img3" alt="job img 3" />
        </section>
      </div>
    </>
  );
};

export default JobCard1;
