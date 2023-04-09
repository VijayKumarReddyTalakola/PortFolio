import React from 'react'
import './Skills.css'
import html from '../../assets/Images/html.png'
import css from '../../assets/Images/css.png'
import javascript from '../../assets/Images/javascript.png'
import java from '../../assets/Images/java.png'
import git from '../../assets/Images/git.png'
import express from '../../assets/Images/express.png'
import linux from '../../assets/Images/linux.png'
import mongodb from '../../assets/Images/mongodb.png'
import node from '../../assets/Images/node.png'
import python from '../../assets/Images/python.png'
import react from '../../assets/Images/react.png'
import redux from '../../assets/Images/redux.png'
import mysql from '../../assets/Images/mysql.png'
const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-page">
        <h1>Skills</h1>
        <p>My Technical Experties</p>
      </div>
      <div className="skills-parent" id="skills">
        <div className="skill-list">
          <div className="skill">
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <img src={javascript} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img src={git} alt="" />
            <p>Git</p>
          </div>
          <div className="skill">
            <img src={mysql} alt="" />
            <p>MySQL</p>
          </div>
          <div className="skill">
            <img src={mongodb} alt="" />
            <p>MongoDb</p>
          </div>
          <div className="skill">
            <img src={express} alt="" />
            <p>Express</p>
          </div>
          <div className="skill">
            <img src={react} alt="" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src={node} alt="" />
            <p>Node</p>
          </div>
          <div className="skill">
            <img src={redux} alt="" />
            <p>Redux</p>
          </div>
          <div className="skill">
            <img src={java} alt="" />
            <p>Java</p>
          </div>
          <div className="skill">
            <img src={python} alt="" />
            <p>Python</p>
          </div>
          <div className="skill">
            <img src={linux} alt="" />
            <p>Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills