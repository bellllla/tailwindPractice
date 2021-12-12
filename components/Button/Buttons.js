/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import GoMain from "../Common/GoMain";

function Buttons() {
  return (
    <section>
      <GoMain />
      <article>
        <h2 className="capitalize">nomal button style</h2>
        <button
          className="
          bg-sky-500
          hover:translate-x-5 transition-all 
          text-white font-bold py-2 px-5 rounded
        "
        >
          nomal button style
        </button>

        <h2 className="capitalize">gradient button style</h2>
        <button
          className="
          bg-gradient-to-r from-violet-500 to-fuchsia-500 
          hover:translate-x-5 transition-all 
          text-white font-bold py-2 px-5 rounded
        "
        >
          2 gradient color button style
        </button>
        <button
          className="
          mx-3
          bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 
          hover:translate-x-5 transition-all 
          text-white font-bold py-2 px-5 rounded
        "
        >
          3 gradient color button style
        </button>


        <h2 className="capitalize">line button style</h2>
        <button
          className="
          border
          hover:translate-x-5 transition-all 
          py-2 px-5 rounded
        "
        >
          line button style
        </button>
        <button
          className="
          mx-3
          border
          hover:translate-x-5 transition-all 
          py-2 px-5 rounded
          border-t-4 border-indigo-500
        "
        >
          border is consist of t,r,b,l
        </button>
      </article>
    </section>
  );
}

export default Buttons;
