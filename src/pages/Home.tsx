import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styling/home.css'
import { motion } from 'framer-motion'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import NextButton from '../components/NextButton';
import { yearDifference } from '../util'
import { ReactTyped } from 'react-typed';


const Home: React.FC = () => {

    const name: string = "Paolo Lansigan";
    const description: string = `Frontend Developer with ${yearDifference} years of experience crafting sleek, high-performance web apps using Vue.js and React.js.`;
    return (
        <motion.div id="page-container" initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, }}
            exit={{ opacity: 0, y: -20 }}  >
            <Helmet>
                <title>Paolo Luis G Lansigan | Portfolio</title>
                <meta name="description" content="Welcome to my portfolio website. Check out my projects and learn more about me." />
                <meta name="keywords" content="portfolio, web developer, projects, React, Vite" />
            </Helmet>

            <div className="home-text-container">
                <h1>
                    <ReactTyped strings={[name]} typeSpeed={100} />
                </h1>
                <p>
                    {description}
                </p>
                <hr className="home-text-divider" />
                <div className="socials-container">
                    <a href="https://github.com/plansigan" target='_blank' rel="noopener noreferrer"><img src={github} alt="github" srcSet="" className='github' /></a>
                    <a href="https://www.linkedin.com/in/paololansigan/" target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="linkedin" srcSet="" /></a>
                </div>
            </div>

            <NextButton path={'about'} />
        </motion.div>
    );
};

export default Home;
