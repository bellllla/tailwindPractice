import React from "react";
import Link from "next/link";

function GoMain() {
  return (
    <div className="flex justify-end">
    <div
      className="
        py-2 px-5
        bg-gradient-to-r from-cyan-500 to-blue-500
        float-right rounded text-center
        hover:font-extrabold
        ">
      <Link href="/">Main</Link>
    </div>
    </div>
  );
}

export default GoMain;
