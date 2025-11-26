import Card from '../card/Card';
import style from '../../assets/css/module/experience.module.scss';
import img from '../../assets/img/a1.png'; // portfolio-ready placeholder image

export default function Experience() {
  const experienceData = [
    {
      postion: "Chief Software Engineer",
      company: "TechNova Solutions",
      jobType: "Full-time",
      startData: "Jan 2022",
      lastDate: "Present",
      job_status: "ONSITE",
      job_description:
        "Leading a team of engineers to design and develop scalable web applications. " +
        "Overseeing architecture decisions, implementing best practices, and ensuring high-quality delivery.",
    },
    {
      postion: "Senior Software Engineer",
      company: "CloudEdge Inc.",
      jobType: "Full-time",
      startData: "Jun 2019",
      lastDate: "Dec 2021",
      job_status: "ONSITE",
      job_description:
        "Developed enterprise-level applications using ASP.NET Core, Microsoft SQL Server, and Node.js. " +
        "Optimized backend services and improved system performance for multiple clients.",
    },
    {
      postion: "Software Engineer",
      company: "BrightCode Labs",
      jobType: "Full-time",
      startData: "Jan 2017",
      lastDate: "May 2019",
      job_status: "REMOTE",
      job_description:
        "Worked on cloud-based solutions, microservices design, and full-stack development. " +
        "Implemented CI/CD pipelines and improved application scalability and reliability.",
    },
  ];

  return (
    <div>
      <div className="container">
        <h1 className="title">Experience</h1>
        <div className={`${style.experienced_box} ${style.withFlexGap}`}>
          {experienceData.map((exp, index) => (
            <Card
              key={index}
              img={img}
              border={true}
              hover={false}
              postion={exp.postion}
              company={exp.company}
              jobType={exp.jobType}
              startData={exp.startData}
              lastDate={exp.lastDate}
              job_status={exp.job_status}
              job_description={exp.job_description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
