import React from "react";
import ParticleBackground from "../../ParticleBackground";
//import "../App.css";
import Skills from "../Skills&Experience/Skills";

function About() {
  return (
    <>
    <div className="About-Page">
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 about pt-5 px-3">
            <h2 className="heading">About</h2>
            <hr  className="line"/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="image" style={{position:"relative",zIndex:"2"}}>
              <img src="images/women.jpg" alt=""  style={{height:"500px"}} />
            </div>
          </div>
        </div>
      </section>
    </div>
    <ParticleBackground/>
    </>
  );
}

export default About;
