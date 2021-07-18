import React from "react";
import Particles from "react-particles-js";

const ParticleBackground = () => {
  return (
    <div>
      <Particles
        className="particles"
        style={{
          position: "absolute",
          top: "0",
         
        }}
        height="96%"
        width="96%"
        params={{
          particles: {
            number: {
              value: 350,
              density: {
                enable: false,
              },
            },
            color: {
              value: "#fff  ",
            },
           
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticleBackground;
