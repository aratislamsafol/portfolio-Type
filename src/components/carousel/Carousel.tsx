import Slider from "react-slick";
import style from "./carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/img/team-1.jpg";
import img1 from "../../assets/img/team-2.jpg";
import img2 from "../../assets/img/team-3.jpg";
import CarouselCard from "./CarouselCard";
export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplaySpeed: 20,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    const testimonialData = [
  {
    img: img,
    comment:
      "Working with Christopher has been transformative. He consistently delivers high-quality code and innovative solutions that scale.",
    userName: "Michael Thompson",
    position: "CEO",
    companyName: "TechNova Solutions",
  },
  {
    img: img1,
    comment:
      "Christopher's expertise in full-stack development and cloud architecture is exceptional. He elevates the entire team.",
    userName: "Sarah Jenkins",
    position: "CTO",
    companyName: "CloudEdge Inc.",
  },
  {
    img: img2,
    comment:
      "Highly skilled, proactive, and reliable. Christopher's contributions in system architecture and microservices design are outstanding.",
    userName: "David Reynolds",
    position: "Lead Engineer",
    companyName: "BrightCode Labs",
  },
  {
    img: img,
    comment:
      "Christopher brings creativity and leadership to every project. His focus on scalability and clean code is remarkable.",
    userName: "Emma Collins",
    position: "Product Manager",
    companyName: "NextGen Web Solutions",
  },
  {
    img: img1,
    comment:
      "Christopher has a remarkable ability to troubleshoot complex systems and deliver elegant solutions under tight deadlines.",
    userName: "James Parker",
    position: "Senior Software Engineer",
    companyName: "Skyline Tech",
  },
  {
    img: img2,
    comment:
      "With Christopher leading the team, our projects have seen significant improvements in efficiency and code quality.",
    userName: "Olivia Sanders",
    position: "Technical Lead",
    companyName: "NextWave Solutions",
  },
  {
    img: img,
    comment:
      "Christopher's mentorship has been invaluable. He consistently guides developers to follow best practices and innovate.",
    userName: "William Carter",
    position: "Engineering Manager",
    companyName: "Innovatech Labs",
  },
  {
    img: img1,
    comment:
      "A true professional in software engineering. Christopher combines technical mastery with strategic thinking.",
    userName: "Sophia Reed",
    position: "Chief Architect",
    companyName: "Vertex Systems",
  },
  {
    img: img2,
    comment:
      "Christopher’s leadership in cross-functional teams ensures projects are delivered on time and exceed expectations.",
    userName: "Benjamin Hughes",
    position: "Director of Engineering",
    companyName: "BlueWave Tech",
  },
  {
    img: img,
    comment:
      "He has an exceptional eye for detail and consistently improves the quality and maintainability of our codebase.",
    userName: "Isabella Fisher",
    position: "Principal Software Engineer",
    companyName: "Next Horizon Labs",
  },
];


  return (
    <div className={style.mainBody}>
      <div className={style.marginBody}>
        <Slider {...settings}>
          {testimonialData.map((testi, index) => (
            <CarouselCard
              key={index}
              img={testi.img}
              comment={testi.comment}
              userName={testi.userName}
              position={testi.position}
              companyName={testi.companyName}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
