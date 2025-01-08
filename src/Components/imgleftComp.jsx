import React from "react";

import yogesh from "../assets/assets/icons/yogesh.png";

function ImgleftComp({title,description,image}) {
  return (
    <>
      <div className="w-full md:w-[50%] flex gap-4 flex-row-reverse md:flex-col  py-3  relative ">
        <div className="md:h-[1px]  top-1/2 left-1/4 -right-0  md:bg-[#1788ae]  absolute    "></div>
        <div className="h-8 w-8 rounded-full md:border-[3px] md:border-[#1788ae] top-2/4 -translate-y-1/2   -right-9  -translate-x-1/2 md:bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 absolute    "></div>
        <img
          className=" w-[700px] md:w-[450px] relative drop-shadow-[0_35px_35px_rgba(135,206,235,0.25)] "
          src={yogesh}
          alt=""
        />
      </div>
      <div className="w-full md:w-[45%] flex gap-3 flex-col px-6 py-3">
        <h1 className="text-2xl md:text-5xl">{title}</h1>
        <p className="text-lg md:text-2xl">(Event Booking)</p>
        <p className="text-lg w-full">{description}
        </p>

        <div className="flex w-full gap-6 flex-wrap ">
          <button className="border border-slate-500 px-2 py-1 rounded-full text-md md:text-xl">
            # react.js
          </button>
          <button className="border border-slate-500 px-2 py-1 rounded-full text-md md:text-xl">
            # node.js
          </button>
          <button className="border border-slate-500 px-2 py-1 rounded-full text-md md:text-xl">
            # node.js
          </button>
          <button className="border border-slate-500 px-2 py-1 rounded-full text-md md:text-xl">
            # node.js
          </button>
          <button className="border border-slate-500 px-2 py-1 rounded-full text-md md:text-xl">
            # node.js
          </button>
          
        </div>
      </div>
    </>
  );
}

export default ImgleftComp;
