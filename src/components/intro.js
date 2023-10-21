// Introduction.js
import React from "react";
import "./intro.scss";
import avatar from '../img/avatar.svg';
import Skill from './skill';
import pythonLogo from '../img/pythonLogo.png';
import reactLogo from '../img/reactLogo.png';
import angularLogo from '../img/angularLogo.png';
import nodeLogo from '../img/nodeLogo.png';
import gitLogo from '../img/gitLogo.png';


const Introduction = () => {
  return (
    <div className="intro" id='about'>
      <div className="intro-header">
        <h1>PERMETTEZ-MOI DE ME PRÉSENTER</h1>
      </div>
      <div className="intro-main">
        <div className="intro-main-left">
            <div className="intro-main__avatar">
                <img src={avatar} alt="Avatar" />
            </div>
            <div className='intro-main__age'>
                <p>J'ai 25 ans</p>
            </div>
            
        </div>
        <div class='intro-main-middle'>
            <div className="intro-main__skills">
                <p>
                Je suis un <strong>développeur web</strong> passionné, fort d'une formation acquise chez <strong>OpenClassrooms</strong> et bientôt <strong>2 ans d'expérience pratique</strong> dans la création de <strong>solutions numériques</strong> pour ma propre entreprise. Actuellement, mon objectif est de trouver un emploi qui me permettra de <strong>monter en compétences</strong> et de <strong>contribuer à des projets innovants</strong>.
                </p>
            </div>
        </div>
        <div className="intro-main-right">
          <h1>Mon stack technique</h1>
            <div className="skills-wrapper">  {/* New wrapping div */}
            <Skill logoSrc={pythonLogo} altText="Python" />
            <Skill logoSrc={reactLogo} altText="React" />
            <Skill logoSrc={angularLogo} altText="Angular" />
            <Skill logoSrc={nodeLogo} altText="NodeJs" />
            <Skill logoSrc={gitLogo} altText="Git" />
            </div>
        </div>
      </div>

      
    </div>
  );
};

export default Introduction;
