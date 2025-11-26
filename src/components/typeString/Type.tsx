import { Typewriter } from "react-simple-typewriter";
import style from "./autotypingeffect.module.scss";
const TypeWritter = () => {
  return (
    <div className="App">
      <h3 className={style.heading}>
        I am{" "}
        <span>
          <Typewriter
            words={[
              'Chief Software Engineer',
              'Senior Software Architect',
              'Lead Technical Engineer',
              'Principal Software Engineer',
              'Head of Software Development'
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </span>
      </h3>
    </div>
  );
};
export default TypeWritter;
