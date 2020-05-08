import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-card  px-1 py-3 ">
        <h2 className="px-2  mb-1">What we are all about</h2>
        <p className="px-2 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe omnis, rerum neque illo sed assumenda fugit maxime,onseneque illo sed assumenda fugit maxime,onseneque illo sed assumenda fugit maxime,onsectetur adipisicing elit. Saepe omnis, rerum neque illo sed assumenda  eaque ratione </p>
        <span>
          <FontAwesomeIcon
            icon="play-circle"
            size="3x"
            style={{ marginRight: "1rem" }}
            color="#ee6a65"
          />
        </span>
      </div>
    </div>
  )
}

export default About
