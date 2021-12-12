import React from "react";
import GoMain from "../Common/GoMain";

function Grids() {
  return (
    <section>
      <GoMain />
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
