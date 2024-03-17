import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5
        data-aos="fade-up"
        data-aos-anchor="#services"
        data-aos-duration="700"
      ></h5>
      <h2
        data-aos="fade-up"
        data-aos-anchor="#services"
        data-aos-duration="900"
      >
        Education
      </h2>

      <div className="container services__container">
        <article
          className="service"
          data-aos="fade-right"
          data-aos-anchor=".services__container"
          data-aos-duration="900"
        >
          <div className="service__head">
            <h3>10th(X)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>Institution:</strong> Karkala Jnansudha High School
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>Year of Graduation:</strong> 2019
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>Percentage:</strong>84.48%
              </p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article
          className="service"
          data-aos="fade-up"
          data-aos-anchor=".services__container"
          data-aos-duration="1200"
        >
          <div className="service__head">
            <h3>12th(XII)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>Institution:</strong> Karkala Jnansudha Pre-university
                college
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>Major:</strong>PCMC
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>Year of Graduation:</strong> 2021
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>Percentage:</strong>84.83%
              </p>
            </li>
          </ul>
        </article>

        {/* End of web development  */}

        <article
          className="service"
          data-aos="fade-left"
          data-aos-anchor=".services__container"
          data-aos-duration="900"
        >
          <div className="service__head">
            <h3> Bachelor of Engineering</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>Institution:</strong>Mangalore Institute of Technology
                and Engineering
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>Major:</strong>Computer Science & Engineering
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>Year of Graduation:</strong> 2025
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <strong>CGPA:</strong>84.48%
              </p>
            </li>
          </ul>
        </article>

        {/* End of digital marketting  */}
      </div>
    </section>
  );
};

export default Services;
