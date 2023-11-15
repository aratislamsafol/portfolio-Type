import Slider from "react-slick";
import style from './carousel.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../assets/img/team-1.jpg';
import img1 from '../../assets/img/team-2.jpg';
import img2 from '../../assets/img/team-3.jpg';
import CarouselCard from "./CarouselCard";
export default function Carousel(){
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
          dots: false
        }
      },
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonialData = [
    {
      img:img,
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      userName: "Jennifer Lutheran",
      position: "CEO",
      companyName:"pxdraft"
    },
    {
      img:img1,
      comment: "SLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      userName: "Jennifer Lutheran",
      position: "CEO",
      companyName:"pxdraft"
    },
    {
      img:img2,
      comment: "PLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      userName: "Jennifer Lutheran",
      position: "CEO",
      companyName:"pxdraft"
    },
    {
      img:img,
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      userName: "Jennifer Lutheran",
      position: "CEO",
      companyName:"pxdraft"
    }
  ];
   
    return (
      <div className={style.mainBody}>
        <div className={style.marginBody}>
          <Slider {...settings}>
            {testimonialData.map((testi, index) => (
              <CarouselCard key={index} img={testi.img} comment={testi.comment} userName={testi.userName} position={testi.position} companyName={testi.companyName}/>
            ))}
          </Slider>
        </div>
        
      </div>
    );
  
}