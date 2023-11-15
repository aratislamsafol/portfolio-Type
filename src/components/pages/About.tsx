import style from '../../assets/css/module/about.module.scss';
import img from '../../assets/img/about-me.png';
import EffectButton from '../button/EffectButton';
import SpaceBar from '../spacebar/SpaceBar';
export default function About() {
  return (
      <div className={style.wrapper}>
        <div className={`container ${style.big_device}`}>
          <div className={style.combined_images}>
            <img src={img} alt="" />
          </div>  
          <div className={style.myInfo}>
            <h1 className={style.title}>about me</h1>
            <h2>I'm a Freelancer Front-end Developer with over 3 years of experience.</h2>
            <span>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</span>

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
    )
}
