import React from "react";
import Buttons from "../components/Button/Buttons";

function Button() {
  
  return (
    <>
      <Buttons
        className="
          capitalize
          bg-sky-500
          border-r-3 border-indigo-500
          flex justify-end 
          mx-3
          bg-gradient-to-r from-cyan-500 to-blue-500
          bg-gradient-to-r from-violet-500 to-fuchsia-500
          bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 
          float-right
          bg-blue-500 hover:bg-blue-300
          hover:translate-x-5 transition-all 
          text-white font-bold py-2 px-5 rounded"
      />
    </>
  );
}

export default Button;
