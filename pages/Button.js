import React from "react";
import Buttons from "../components/Button/Buttons";

function Button() {
  
  return (
    <>
      <Buttons
        className="
          capitalize
          bg-gradient-to-r from-cyan-500 to-blue-500
          bg-gradient-to-r from-violet-500 to-fuchsia-500
          float-right
          bg-blue-500 hover:bg-blue-300
          hover:translate-x-5 transition-all 
          text-white font-bold py-2 px-5 rounded"
      />
    </>
  );
}

export default Button;
