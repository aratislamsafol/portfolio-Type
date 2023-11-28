import About from "../About";
import EducationSkills from "../EducationSkills";
import Experience from "../Experience";

export default function AboutMe(){
    return(
        <div id='about'>
            <About />
            <EducationSkills/>
            <Experience/>
        </div>
    );
}