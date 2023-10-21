
import React from 'react';
import './skill.scss';

const Skill = ({ logoSrc, altText }) => (
  <div className="skill">
    <img src={logoSrc} alt={altText} className="skill-logo" />
  </div>
);

export default Skill;
