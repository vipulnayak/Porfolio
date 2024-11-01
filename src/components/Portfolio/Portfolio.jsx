import { useState } from "react";
import "./portfolio.css";
import Modal from "../Modal/Modal";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "InkaNote",
      deployedLink: "https://inkanote.netlify.app/",
      image: require("../../assets/starship.png"),
      fadeDuration: "1000",
      description: "",
      toolsUsed: ["React", "MongoDb", "NodeJs", "Express", "MUI", "JWT"],
    },
    {
      name: "CoinPulse",
      deployedLink: "https://coinpulse-vipul.netlify.app/",
      image: require("../../assets/chatter.png"),
      description:
        "Welcome to Chatter, a social media application that allows users to connect and interact with each other in real-time.",
      fadeDuration: "1100",
      toolsUsed: [
        "React",
        "MongoDb",
        "NodeJs",
        "Express",
        "MUI",
        "JWT",
        "Web sockets",
      ],
    },
    {
      name: "BuyBox",
      deployedLink: "https://buy-box.netlify.app/",
      image: require("../../assets/weBlog.png"),
      fadeDuration: "1200",
      description:
        "CMS-style blog site that can publish articles, blog posts, thoughts and opinions",
      toolsUsed: [
        "Handlebars",
        "mySQl",
        "NodeJs",
        "Express",
        "Bootstrap",
        "sequelize",
      ],
    },
    {
      name: "FlytSocial",
      deployedLink: "https://github.com/vipulnayak/FlytSocial",
      image: require("../../assets/flyt.jpg"),
      fadeDuration: "1300",
      description:
        "FlytSocial is a social media app that enables users to stay engaged with instant notifications, fostering continuous interaction and connection. Built using Flutter, Dart, and Provider, FlytSocial showcases expertise in app development and collaborative teamwork.",
      toolsUsed: ["Flutter", "Firebase", "Dart", "localStorage"],
    },
    // {
    //   name: "AutoAuto",
    //   deployedLink: "https://stormy-wildwood-35895.herokuapp.com/",
    //   image: require('../../assets/autoAuto.png'),
    //   fadeDuration:'1400',
    //   description:"A full stack web application that allows users to buy cars, book test drives and so much more",
    //   toolsUsed: ['Handlebars','mySQl','NodeJs','Express','Bootstrap','sequelize']
    // },

    // {
    //   name:"AwesomeEditorPWA",
    //   deployedLink: "https://salty-everglades-36024.herokuapp.com/",
    //   image: require('../../assets/text-editor.png'),
    //   fadeDuration:'1500',
    //   description:"A Progressive web application that allows users to create notes or code snippets with or without an internet connection so they can reliably retrieve them for later use",
    //   toolsUsed: ['indexDb','HTML/CSS','localStorage','Webpack']
    // }
  ];

  const handleClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="portfolio">
      <h5
        data-aos="fade-up"
        data-aos-anchor=".portfolio__container"
        data-aos-duration="700"
      >
        My most recent projects
      </h5>
      <h2
        data-aos="fade-up"
        data-aos-anchor=".portfolio__container"
        data-aos-duration="900"
      >
        My Portfolio
      </h2>

      <div className="container portfolio__container">
        {projects.map(
          ({
            name,
            image,
            deployedLink,
            description,
            toolsUsed,
            fadeDuration,
          }) => (
            <article
              className="portfolio__item"
              key={name}
              data-aos="fade-up"
              data-aos-anchor=".portfolio__container"
              data-aos-duration={fadeDuration}
            >
              <div className="portfolio__item-image">
                <img src={image} alt={`${name} app Screenshot`} />
              </div>
              <h3
                className="portfolio__item-name"
                onClick={() =>
                  handleClick({
                    name,
                    image,
                    deployedLink,
                    toolsUsed,
                    description,
                  })
                }
              >
                {name}
              </h3>

              <div className="portfolio__item-cta">
                <a
                  className="btn"
                  href={`https://github.com/vipulnayak/${name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="btn btn-primary"
                  href={deployedLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        )}
      </div>

      {isModalOpen && (
        <Modal closeModal={handleClick} project={selectedProject} />
      )}
    </section>
  );
};

export default Portfolio;
