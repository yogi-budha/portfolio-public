

import ImgleftComp from "../Components/imgleftComp";
import ImgrightComp from "../Components/imgrightComp";
import Connect from "../Components/Connect";
import onlinefoodDelivery from "../assets/assets/icons/yogesh.png";
import calculator from "../assets/assets/icons/calculator-App.png";

import visitSurkhet from "../assets/assets/icons/visitskt.png";

function ProjectWork({ sectionRef }) {
  return (
    <div
      ref={sectionRef}
      className="w-full h-full flex flex-col items-center justify-center  relative"
    >
      <div className="w-[80%] h-full   text-white relative">
        <h1 className="w-full  py-1 flex items-center justify-center  text-3xl md:text-5xl text-sky-600 z-10 relative ">
          Latest Works
        </h1>
        <div className="w-[2px] h-full  translate-x-1/2 bg-sky-400 absolute left-1/2"></div>

        <hr className=" md:w-72 w-[70%] mx-auto md:border-b-4 border-sky-600" />

        <a href="https://project-of-food-dell.vercel.app/" target="_blank">

          <div className="w-full flex flex-col lg:flex-row md:justify-between md:items-center pt-11 ">
          <ImgleftComp
            title={"Food Delivery App"}
            description={
              "FoodieExpress is a fast, reliable, and user-friendly online food delivery application designed to bring your favorite meals straight to your home. Whether you're craving pizza, sushi, or a healthy salad, FoodieExpress connects you with the best restaurants in town. Enjoy exclusive offers, real-time delivery tracking, and a seamless payment experience through our app."
            }
            image={onlinefoodDelivery}
          />
          {/* <ImgrightComp/> */}
        </div>
        </a>

            <a href="https://visitsurkhetfrontproject.vercel.app/" target="_blank">

              <div className="w-full flex flex-col lg:flex-row md:justify-between md:items-center pt-11">
          {/* <ImgleftComp/> */}
          <ImgrightComp
            title={"Visit Surkhet"}
            description={`The "Visit Surkhet" app is  ultimate travel companion for exploring the stunning landscapes, rich culture, and vibrant traditions of Surkhet, Nepal. Designed for tourists and locals alike, this app offers a complete guide to the district’s top attractions, accommodations, events, and services. Whether you’re planning a peaceful getaway, an adventurous trek, or a cultural exploration, "Visit Surkhet" has  covered.`}
            image={visitSurkhet}
          />
        </div>
            </a>
        
        
                  <a href="https://calculator-app-mu-steel.vercel.app/" target="_blank">
        <div className="w-full flex flex-col lg:flex-row md:justify-between md:items-center pt-11">


          <ImgleftComp
            title={"Calculator App"}
            description={
              "Calculator App is a simple, user-friendly application designed to perform basic arithmetic operations like addition, subtraction, multiplication, and division. "
            }
            image={calculator}
          />
    
          
        </div>      </a>
      </div>
        <h1 className="w-full pt-12 mt-10 flex items-center justify-center  text-5xl text-sky-600 z-10 relative">
          Let's Connect
        </h1>

        <hr className=" w-72 mx-auto border-b-4 border-sky-600" />

        <Connect />
    </div>
  );
}

export default ProjectWork;
