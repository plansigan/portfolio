import React from 'react';
import { Link } from 'react-router-dom';
import arrowDown from '../assets/arrow-down.png'
import '../styling/About.css'

interface NextButtonInterface {
    path: string;
}

const NextButton: React.FC<NextButtonInterface> = ({ path = '' }) => {
    return (
        <div className='arrow-icon-down'>
            <Link to={`/${path}`}> <img src={arrowDown} alt="arrow-down" srcSet="" /></Link>
        </div>

    );
};

export default NextButton;
