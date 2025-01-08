import React from "react";

import ImgleftComp from "../Components/imgleftComp";
import ImgrightComp from "../Components/imgrightComp";
import Connect from "../Components/Connect";

function ProjectWork({sectionRef}) {
  return (
    <div ref={sectionRef} className="w-full h-full flex items-center justify-center">
      <div className="w-[80%] min-h-screen text-white">
          <h1 className="w-full  py-1 flex items-center justify-center  text-3xl md:text-5xl text-sky-600 z-10 relative ">
          Latest Works
        </h1>
<div className="w-[2px] md:h-full translate-x-1/2 bg-sky-400 absolute left-1/2"></div>

      
        <hr className=" md:w-72 w-[70%] mx-auto md:border-b-4 border-sky-600" />

        <div className="w-full flex flex-col lg:flex-row md:justify-between md:items-center pt-11 ">
       <ImgleftComp/>
       {/* <ImgrightComp/> */}
        </div>
        <div className="w-full flex flex-col lg:flex-row md:justify-between md:items-center pt-11">
       {/* <ImgleftComp/> */}
       <ImgrightComp/>
        </div>
        <div className="w-full flex flex-col lg:flex-row md:justify-between md:items-center pt-11 ">
       <ImgleftComp/>
       {/* <ImgrightComp/> */}
        </div>
        <h1 className="w-full pt-12  flex items-center justify-center  text-5xl text-sky-600 z-10 relative">Let's Connect</h1>
        
        <hr className=" w-72 mx-auto border-b-4 border-sky-600" />

        <Connect/>
      </div>
 
    </div>
  );
}

export default ProjectWork;
