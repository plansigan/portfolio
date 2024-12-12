import React from 'react';
import { motion } from 'framer-motion'
import '../styling/About.css'
import NextButton from '../components/NextButton';
import { yearDifference } from '../util'
import GlitchText from '../components/GlitchText';
import TextGlitchEffect from '../components/GlitchText2';

import Photo from '../assets/me.jpeg'

const About: React.FC = () => {
  return (
    <motion.div id="page-container" initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}  >
      <div className="about-me-content">
        <div className="about-me-text">
          <h1> <GlitchText text='About me ' /></h1>

          <p>
            Hello! I'm <span className="highlight">Paolo Lansigan</span>, a passionate Frontend Developer with {yearDifference} years
            of experience crafting sleek and performant web applications using the latest technologies, like
            <span className="highlight"> React.js</span> and <span className="highlight">Vue.js</span>.
          </p>
          <TextGlitchEffect
            text={"I love creating user experiences that are not only beautiful but also highly functional."}
            speed={2}
            letterCase="lowercase"
            className="glitchText"
            type="alphanumeric"
            startOnLoad
          />
          <br />

          <TextGlitchEffect
            text={"Outside of coding, you'll find me exploring new design trends, or enjoying a cup of coffee at my favorite local café."}
            speed={2}
            letterCase="lowercase"
            className="glitchText"
            type="alphanumeric"
            startOnLoad
          />

        </div>
        <div className="about-me-photo">
          <img
            src={Photo}
            alt="Paolo Lansigan"
            className="profile-photo"
          />
        </div>
      </div>

      <NextButton path={'experience'} />
    </motion.div>
  );
};

export default About;
