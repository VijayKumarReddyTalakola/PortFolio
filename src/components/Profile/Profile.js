import React from 'react'
import { Link } from "react-scroll";
import Typical from 'react-typical'
import { FaDiscord, FaInstagram ,FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Me from '../../assets/Images/Me.jpg'
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/vijaykumarreddy.talakola.3" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com/vijay_talakola/" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://github.com/VijayKumarReddyTalakola" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/talakola-vijay-kumar-reddy-1b5028231/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://discord.com/channels/@me" rel="noreferrer" target="_blank"><FaDiscord /></a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Vijay </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical loop={Infinity} steps={[ "Web Developer", 1000, "UI/UX Designer", 1000, "MERN Developer", 1000, "Analyst", 1000 ]}/>
              </h1>
              <span className="profile-role-tagline">
                Knack of building front-end applications using MERN
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Hire Me</Link>
            </button>
            <a href="Resume.pdf" download="Vijay Kumar.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
            <img src={Me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile