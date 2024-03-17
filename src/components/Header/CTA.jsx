import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        data-aos="fade-right"
        target="_blank"
        href="https://app.luminpdf.com/viewer/65f6f4240e7e7f689823e9a3"
        className="btn"
        rel="noreferrer"
      >
        Resume
      </a>
      <a data-aos="fade-left" href="#contact" className="btn btn-primary">
        Let's Connect
      </a>
    </div>
  );
};

export default CTA;
