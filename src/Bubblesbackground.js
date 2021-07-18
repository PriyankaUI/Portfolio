import React from "react";
import Particles from "react-particles-js";


export const Bubblesbackground = () => {
  return (
    <div>
      <Particles
        style={{
          position: "absolute",
          top: "0",
          zIndex:"0"
        }}
        height="96%"
        width="96%"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: false,
              },
            },
            size: {
              value: 30,
              random: true,
            },
            move: {
              direction: "bottom",
              out_mode: "out",
            },
            line_linked: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "remove",
              },
            },
            modes: {
              remove: {
                particles_nb: 1,
              },
            },
          },
        }}
      />
    </div>
  );
};
