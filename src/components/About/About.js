import React from 'react'
import { Link } from "react-scroll";
import me from '../../assets/Images/Me.jpg'
import './About.css'
const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>About Me</h1>
        <p>Why Choose Me?</p>
      </div>
      <div className="about-parent" id="about">
        <div className="about-image">
          <img src={me} alt="me" />
        </div>
        <div className="about-details">
          <div className="about-desc">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>
            <h3>These are few highlights</h3>
            <div className="about-skills">
              <ul>
                <li>React and react native</li>
                <li>React and react native</li>
                <li>React and react native</li>
                <li>React and react native</li>
                <li>React and react native</li>
                <li>React and react native</li>
              </ul>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Hire Me
                </Link>
              </button>
              <a href="Resume.pdf" download="Vijay Kumar.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About