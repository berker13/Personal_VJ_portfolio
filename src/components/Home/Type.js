import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Brawl stars enthusiast and graphics enjoyer. Feel free to checkout my about page for more information",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        solid: true,
      }}
    />
  ); 
}

export default Type;
