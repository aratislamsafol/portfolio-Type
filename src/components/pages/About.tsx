import { useEffect, useRef, useState } from "react";
import style from '../../assets/css/module/about.module.scss';
import img from '../../assets/img/about-me.png';
import EffectButton from '../button/EffectButton';
import SpaceBar from '../spacebar/SpaceBar';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // যখন 30% portion view এ আসবে
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.wrapper} ref={sectionRef}>
      <div className={`container ${style.big_device}`}>
        <div className={`${style.combined_images} ${visible ? style.slideLeft : ''}`}>
          <img src={img} alt="" />
        </div>  
        <div className={`${style.myInfo} ${visible ? style.slideUp : ''}`}>
          <h1 className={style.title}>about me</h1>
          <h2>I'm a Chief Software Engineer with 8+ years of experience.</h2>
          <span className={style.textJustify}>
            I’m a Chief Software Engineer specializing in building fast, modern, and scalable web applications. 
            Over the last few years, I have worked with global clients, helping them turn complex ideas into 
            high-quality digital products. I enjoy solving technical challenges, improving system performance, 
            and creating clean user experiences. Every project teaches me something new, and I believe in 
            continuous learning and innovation.
          </span>

          <div className={style.completation}>
            <div className={style.prject_complete}>
              <div className={style.content}>
                <div className={style.left}>
                  <h1>5K</h1>
                </div>
                <div className={style.right}>
                  <p>Projects</p>
                  <p>Completed</p>
                </div>
              </div>
              <EffectButton type="button" children="Contact Me"/>
            </div> 

            <div className={style.client_satisfied}>
              <div className={style.content}>
                <div className={style.left}>
                  <h1>3K</h1>
                </div>
                <div className={style.right}>
                  <p>Satisfied</p>
                  <p>Clients</p>
                </div>
              </div>
              <EffectButton type="button" children="Portfolio"/>
            </div>
          </div>
        </div>
      </div>
      <SpaceBar />
    </div>
  );
}
