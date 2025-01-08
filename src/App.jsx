import { useRef } from "react";
import DownButton from "./Components/DownButton";
import Footer from "./Components/Footer";
import MatterComponent from "./Components/MatterComponent";
import Nav from "./Components/Nav";
import Body from "./Page/Body";
import ProjectWork from "./Page/ProjectWork";

export default function App() {

  const sectionRef = useRef(null); // Create a reference to the section

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
 <div className="w-full   bg-slate-800 ">


  <div className="w-full h-screen text-white flex flex-col items-center justify-between gap-10 pb-24 overflow-y-hidden">
      <Nav/>
  <MatterComponent/>

        <Body />
      
  <DownButton scrollToSection={scrollToSection}/>  

  </div>

  <ProjectWork sectionRef={sectionRef}/>


  <Footer/>
 </div>
  )
}