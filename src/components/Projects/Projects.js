import React from "react";
import ParticleBackground from "../../ParticleBackground";
import Card from "./Card";
import './Project.css'

function Projects() {
  return (
    <>
    <div className="projects-page ">
      <h2 className="pb-3 ps-3 heading">Projects</h2>
      <div className="project-container">
        <div className="inner-container py-2">
          <div className="row px-lg-4 px-md-3 px-sm-2 px-0 py-4 mx-auto gy-3">
            <Card />
          </div>
        </div>
      </div>
    </div>
    <ParticleBackground/>
    </>
  );
}

export default Projects;
