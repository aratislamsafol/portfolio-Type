import Navbar from "../navbar/Navbar";
import About from "./About";
import Blog from "./Blog";
import EducationSkills from "./EducationSkills";
import Experience from "./Experience";
import Expertise from "./Expertise";
import Gallery from "./Gallery";
import GetInTouch from "./GetInTouch";
import Home from "./Home";
import Testimonial from "./Testimonial";
export default function Main() {
  return (
    <div className="topNav">  
    {/* className="topNav" */}
      <div style={{ position: 'sticky',top: 0, zIndex:'25', background:'white'}}>
          <Navbar />
      </div>
      <Home />
    
      <div className='main_wrapper'>
        <About />
        <EducationSkills />
        <Experience />
        <Expertise />
        <Testimonial />
        <Gallery />
        <Blog />
        <GetInTouch />
      </div>
    </div>
    
  )
}
