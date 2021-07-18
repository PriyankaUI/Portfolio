import React from "react";
import Experience from "./Experience";
import SkillCard from "./SkillCard";
import Skills from "./Skills";
import "./Work.css";
import ParticleBackground from "../../ParticleBackground";
import { Bubblesbackground } from "../../Bubblesbackground";

function Work() {
  return (
    <>
    <div class="work-page">
      <section className="container-fluid px-3">
      <h2 className="heading">My Skills</h2>
            <hr className="line" />
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12 about pt-5 px-3 order-sm-2 order-md-1">
           
            <div className="row SkillCards gy-3" >
              <SkillCard/>
            </div>
          </div>
          <div className=" col-lg-5 col-md-6 col-sm-12 order-sm-1 order-md-2">
            <Skills />
          </div>
        </div>
      </section>
      <section className="Experience-page mt-3 pt-3 px-2">
        <Experience/>
      </section>
     
    </div>
    <ParticleBackground/>
    </>
    
  );
}

export default Work;
