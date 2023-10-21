import React from "react";
import './project.scss';

const Project = ({ data }) => {
  return (
    <div className="project">
      <div className="project-header">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
            <img src={data.image} alt={`${data.title}`} />
        </a>
      </div>
      <div className="project-details">
        <h2>{data.title}</h2>
        <p className="project-description">{data.description}</p>
        <p className="project-challenges">{data.challenges}</p>
        <p className="project-skills">{data.skills}</p>
      </div>
    </div>
  );
};

export default Project;
