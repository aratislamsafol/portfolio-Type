import style from "../../assets/css/module/edutcation.module.scss";
import SkillBar from "../skillbar/SkillBar";
import SpaceBar from "../spacebar/SpaceBar";

interface EducationProps {
  session_start: string;
  session_end: string;
  course: string;
  institution: string;
  gpa?: string;
}

const EducationSkills = () => {
const educationData: EducationProps[] = [
  {
    session_start: "2012",
    session_end: "2016",
    course: "Bachelor of Science in Computer Science",
    institution: "Massachusetts Institute of Technology (MIT)",
    gpa: "3.9/4.0",
  },
  {
    session_start: "2016",
    session_end: "2018",
    course: "Master of Science in Software Engineering",
    institution: "Stanford University",
    gpa: "4.0/4.0",
  },
  {
    session_start: "2018",
    session_end: "2019",
    course: "Professional Certification in Cloud & DevOps",
    institution: "Amazon Web Services (AWS) Training",
    gpa: "",
  },
  {
    session_start: "2019",
    session_end: "2020",
    course: "Advanced Cloud & Systems Architecture",
    institution: "Carnegie Mellon University",
    gpa: "",
  },
  {
    session_start: "2021",
    session_end: "2022",
    course: "Executive Leadership in Software Engineering",
    institution: "Harvard Extension School",
    gpa: "",
  },
];


  return (
    <div className={style.wrapper}>
      <div className={`container`}>
        <h1 className={`title ${style.margin_bottom}`}>EDUCATION & SKILLS</h1>
        {/* education */}
        <div className={`${style.big_display}`}>
          <div>
            {educationData.map((data, index) => (
              <div key={index} className={style.education_box}>
                <span>
                  {data.session_start} - {data.session_end}
                </span>
                <h3>{data.course}</h3>
                <p>{data.institution}</p>
              </div>
            ))}
          </div>

          {/* skills */}
          <div className={style.skills}>
            <h1
              style={{
                fontWeight: "600",
                fontSize: "30px",
                letterSpacing: "6px",
                marginBottom: "20px",
              }}
            >
              My Technical Expertise
            </h1>
            <span>
I’m a Chief Software Engineer with 8+ years of experience designing and building scalable, high-performance web applications. I specialize in leading complex projects, architecting robust systems, and mentoring engineering teams to deliver high-quality solutions. My focus is on writing clean, efficient code, optimizing user experiences, and implementing innovative solutions that drive real business impact.
</span>

            <SkillBar />
          </div>
        </div>

        <SpaceBar />
      </div>
    </div>
  );
};

export default EducationSkills;
