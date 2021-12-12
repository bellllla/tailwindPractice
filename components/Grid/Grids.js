import React from "react";
import Link from 'next/link';

function Grids() {
  return (
    <section>
      <Link href ='/'>go Main</Link>
      <div className="p-8"> 
        <div
          className="grid grid-cols-4 gap-4"
        >
          <div className="h-10 w-16 rounded-lg">Gird 1!!</div>
          <div className="col-span-2 h-10 w-16 rounded-lg">Gird 2!!</div>
        </div>
      </div>
    </section>
  );
}

export default Grids;
