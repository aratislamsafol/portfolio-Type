import style from '../../assets/css/module/edutcation.module.scss';
import SkillBar from '../skillbar/SkillBar';
import SpaceBar from '../spacebar/SpaceBar';

interface EducationProps {
  session_start: string;
  session_end: string;
  course: string;
  institution: string;
  gpa?: string;
}

const EducationSkills = () => {
  const educationData: EducationProps[] = [
    { session_start: '2020', session_end: '2022', course: 'Graphics Designer', institution: 'International Design Institute', gpa: '' },
    { session_start: '2020', session_end: '2022', course: 'Web Development', institution: 'International Design Institute', gpa: '' },
    { session_start: '2020', session_end: '2022', course: 'Search Engine Optimization', institution: 'International Design Institute', gpa: '' },
  ];

  return (
    <div className={style.wrapper}>
      <div className={`container`}>
        <h1 className={`title ${style.margin_bottom}`}>EDUCATION & SKILLS</h1>
        {/* education */}
        <div className={`${style.big_display}`}>
          <div>
            {educationData.map((data, index)=>
              <div key={index} className={style.education_box}>
                <span>{data.session_start} - {data.session_end}</span>
                <h3>{data.course}</h3>
                <p>{data.institution}</p>
              </div>
            )}
          </div>
          
          {/* skills */}
          <div className={style.skills}>
            <h1 style={{fontWeight:'600', fontSize:'30px', letterSpacing: '6px', marginBottom:'20px'}}>My skills</h1>
            <span>I'm a Freelancer Front-end Developer with over 3 years of experience. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</span>
            <SkillBar />
          </div>
        </div>
        
        <SpaceBar />
      </div>
    </div>
  );
};

export default EducationSkills;