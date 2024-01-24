import React from 'react';
import fond_about from "../assets/fond_about.png";
import "../styles/About.scss";


function About() {
    return (
      <div className="about">
        
          <div className="about__photo" >
            <img src={fond_about} alt="logo" />
          </div>
          
       
      </div>
    );
  }
  
  export default About;
  