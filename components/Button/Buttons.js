/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Link from "next/link";

function Buttons() {
  return (
    <section>
      <div
        className="
        py-2 px-5
        bg-gradient-to-r from-cyan-500 to-blue-500
        float-right rounded text-center"
      >
        <Link href="/">Go Main</Link>
      </div>

      <article>
        <h2 className="capitalize">nomal button style</h2>
        <button
          className="
          bg-gradient-to-r from-cyan-500 to-blue-500
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
          gradient button style
        </button>

        <h2 className="capitalize">line button style</h2>
        <button
          className="
          bg-blue-500 
          hover:translate-x-5 transition-all 
          text-white font-bold py-2 px-5 rounded
        "
        >
          line button style
        </button>
      </article>
    </section>
  );
}

export default Buttons;
