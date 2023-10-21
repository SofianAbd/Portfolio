import React from "react";
import Project from "./project";  // Assurez-vous que le chemin d'accès est correct
import './projects.scss';
import mangaboImage from '../img/mangaboImage.PNG';
import kasaImage from '../img/kasaImage.PNG';
import grimoireImage from '../img/grimoireImage.png';


const Projects = () => {
    const projectData = [
        {
            title: "Mangabo",
            description: "Service d'abonnement pour mangas physiques livrés.",
            challenges: "Gestion des abonnements, suivi des livraisons, travail en équipe réduite.",
            skills: "Angular, Nest.js, gestion de projet, intégration API.",
            link: "https://github.com/username/mangabo",
            image: mangaboImage
          },
        {
            title: "Kasa Immobilier",
            description: "Plateforme de location de biens entre particuliers.",
            challenges: "Rendre le site dynamique avec React, mise à jour des listings en temps réel.",
            skills: "React, React Router.",
            link: "https://github.com/SofianAbd/KasaOC",
            image: kasaImage
        },
        {
            title: "Mon vieux grimoire",
            description: "Site de notation de livres avec backend en Node.js.",
            challenges: "Implémentation du backend, gestion des uploads d'images avec Multer.",
            skills: "Node.js, Express, Multer, MongoDB.",
            link: "https://github.com/SofianAbd/ProjetBackOC",
            image: grimoireImage
        }
        
    ]
    
    
    

  return (
    <div className="projects" id='projects'>
      {projectData.map((project, index) => (
        <Project key={index} data={project} />
      ))}
    </div>
  );
};

export default Projects;
