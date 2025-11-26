import style from '../../assets/css/module/testimonial.module.scss'
import Carousel from '../carousel/Carousel';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

const CustomSlickNext = styled.div`
  .slick-next {
    right: 20px !important;
  }
`;

export default function Testimonial() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${style.wrapper} ${isVisible ? 'show' : ''}`}
      ref={wrapperRef}
      id="testimonial"
    >
      <div className="container">
        <h1 className="title" style={{ marginTop: 0, paddingTop: 0 }}>
          Testimonials
        </h1>
        <CustomSlickNext>
          <Carousel />
        </CustomSlickNext>
      </div>
    </div>
  );
}
