import React from "react";
//import AOS from 'aos'
//import "../App.css";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ParticleBackground from "../../ParticleBackground";
function Home() {
  // useEffect(()=>{
  //   AOS.init({
  //     duration: 600,
  //   });
  // })
  return (
    <>
      <div className="home-page d-flex align-items-center justify-content-center">
        <div className="section1" style={{zIndex:"3"}}>
          <div class="home text-center ">
            <div class="text2">Hello, I'm</div>
            <div class="text1 my-2">Priyanka Pradhan</div>
            <div class="text1">
              I am a{" "}
              <span style={{ color: "#f8274a" }}>Frontend Developer</span>
            </div>
            <div className="mt-3">
              <NavLink to="./Projects">
                <Button text="My Works" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <ParticleBackground/>
    </>
  );
}

export default Home;
