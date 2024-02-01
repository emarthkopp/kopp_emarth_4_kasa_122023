import React from 'react';
import fond_about from "../assets/fond_about.png";
import "../styles/About.scss";
import CollapseAbout from './CollapseAbout';


function About() {
    return (
      <div>
        <div className="about">
          <div className="about__photo">
            <img src={fond_about} alt="logo" />
          </div>
        </div>
        <CollapseAbout />
      </div>
    );
  }
  
  export default About;
  