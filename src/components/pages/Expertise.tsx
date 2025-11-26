import style from '../../assets/css/module/expertise.module.scss';
import Card from '../card/Card';
import img from '../../assets/img/a1.png';
import SpaceBar from '../spacebar/SpaceBar';
import { useEffect, useRef, useState } from 'react';

export default function Expertise() {
const expertiseData = [
  {
    postion: "Full-Stack Development",
    job_description:
      "Designing and building scalable web applications using modern frameworks like React, Node.js, and ASP.NET Core. Ensuring seamless integration between frontend and backend systems for optimal performance and user experience.",
  },
  {
    postion: "System Architecture",
    job_description:
      "Planning and implementing robust software architectures, including microservices, event-driven systems, and cloud-based infrastructures. Ensuring scalability, security, and maintainability for enterprise-level applications.",
  },
  {
    postion: "Cloud & DevOps",
    job_description:
      "Managing cloud deployments on AWS/Azure/GCP, implementing CI/CD pipelines, containerization using Docker/Kubernetes, and automating monitoring, logging, and deployment processes.",
  },
  {
    postion: "Database Design & Management",
    job_description:
      "Designing and optimizing relational (SQL) and non-relational (NoSQL) databases. Handling complex queries, data migrations, indexing, and ensuring data integrity and performance for high-traffic applications.",
  },
  {
    postion: "Code Review & Mentorship",
    job_description:
      "Conducting code reviews, enforcing best practices, mentoring junior and mid-level developers, and fostering a culture of continuous improvement and clean, maintainable code.",
  },
  {
    postion: "UI/UX & Frontend Engineering",
    job_description:
      "Building responsive and accessible user interfaces with modern frontend frameworks. Collaborating with designers to implement intuitive UX, optimizing frontend performance, and ensuring cross-browser/device compatibility.",
  },
];


  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.wrapper} ref={containerRef}>
      <div className="container">
        <h1 className='title'>What I DO?</h1>
        <div className={`${style.content} ${visible ? style.animate : ''}`}>
          {expertiseData.map((item, index) => (
            <Card
              key={index}
              img={img}
              hover
              postion={item.postion}
              job_description={item.job_description}
            />
          ))}
        </div>
        <SpaceBar/>
      </div>
    </div>
  );
}
