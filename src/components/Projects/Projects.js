import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import html from '../../assets/Images/html.png'
import imdb from '../../assets/Images/IMDB.png'
import hindu from '../../assets/Images/theHindu.png'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project-page">
        <h1>Projects</h1>
        <p> My Experiences</p>
      </div>
      <div className="projects" id="projects">
        <div className="project">
          <img src={html} alt="" />
          <div className="project-desc">
            <h3>Portfolio Website</h3>
            <p>
              {" "}
              This is a website which provides all the basic info about me.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/VijayKumarReddyTalakola/Port_Folio"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://vijaykumar-portfolio.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={imdb} alt="" />
          <div className="project-desc">
            <h3>IMDB Website</h3>
            <p>A simple movie website created using React and TMDB Api</p>
            <div className="project-links">
              <a
                href="https://github.com/VijayKumarReddyTalakola/IMDB"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://imdb-rho.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={html} alt="" />
          <div className="project-desc">
            <h3>Ecomm Website</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="project-links">
              <a
                href="https://github.com/VijayKumarReddyTalakola/Port_Folio"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaGithub />
              </a>
              <a
                href="https://vijaykumar-portfolio.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={html} alt="" />
          <div className="project-desc">
            <h3>Portfolio Website</h3>
            <p>
              {" "}
              This is a portfolio website which provides all the basic info
              about me.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/VijayKumarReddyTalakola/Port_Folio"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://vijaykumar-portfolio.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={hindu} alt="" />
          <div className="project-desc">
            <h3>TheHindu Clone</h3>
            <p>
               The TheHindu E-Paper Landing Page using HTML
              and CSS.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/VijayKumarReddyTalakola/theHindu-Clone"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://thehindu-epaper-clone.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects
