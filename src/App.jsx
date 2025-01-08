import DownButton from "./Components/DownButton";
import Footer from "./Components/Footer";
import MatterComponent from "./Components/MatterComponent";
import Nav from "./Components/Nav";
import Body from "./Page/Body";
import ProjectWork from "./Page/ProjectWork";

export default function App() {
  return (
 <div className="w-full min-h-screen  bg-slate-800 ">


  <div className="w-full h-screen text-white flex flex-col items-center justify-between gap-10 pb-24 overflow-y-hidden">
      <Nav/>
  {/* <MatterComponent/> */}

        <Body/>
      
  <DownButton/>  

  </div>

  <ProjectWork/>


  <Footer/>
 </div>
  )
}