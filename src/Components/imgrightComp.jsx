import React from 'react'

import yogesh from "../assets/assets/icons/yogesh.png";
function ImgrightComp({title,description,image}) {
  return ( 
  <>
            <div className="w-full flex md:justify-between flex-col-reverse md:flex-row ">
            <div className="w-full md:w-[45%] flex justify-end gap-3 flex-col px-6 py-3">
              <h1 className="text-2xl md:text-5xl ">{title}</h1>
              <p className="text-md md:text-lg">
               {description}
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

            <div className="w-full md:w-[50%] flex gap-3 flex-col items-end  py-3  relative ">
                   <div className='h-[1px]  top-1/2 right-1/4 -left-0 md:bg-[#1788ae]  absolute    '></div>
                   <div className='h-8 w-8 rounded-full md:border-[3px] md:border-[#1788ae] top-2/4 -translate-y-1/2   left-0  -translate-x-1/2 md:bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 absolute    '></div>
                       <img className="w-[700px]  md:w-[450px] relative drop-shadow-[0_35px_35px_rgba(135,206,235,0.25)] " src={image} alt=""  />
                     </div>
        
          </div>
      </>
  )
}

export default ImgrightComp