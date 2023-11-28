import style from './combo.module.scss';
import img1 from '../../assets/img/m-portfolio-1.jpg';
import img2 from '../../assets/img/m-portfolio-2.jpg';
import img3 from '../../assets/img/m-portfolio-3.jpg';
import img4 from '../../assets/img/m-portfolio-4.jpg';
import img5 from '../../assets/img/m-portfolio-5.jpg';
import img6 from '../../assets/img/m-portfolio-6.jpg';
import img7 from '../../assets/img/m-portfolio-7.jpg';
import img8 from '../../assets/img/m-portfolio-8.jpg';
import img9 from '../../assets/img/m-portfolio-9.jpg';
export default function MainComponent(){
  return(
    <div className={style.grid_wrapper}>
      <div>
        <img src={img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
      <div className={style.tall}>
        <img src={img4} alt=""/>
      </div>
      <div className={style.wide}>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img5} alt="" />
      </div>
      <div className={style.tall}>
        <img src={img6} alt="" />
      </div>
      <div className={style.big}>
        <img src={img7} alt="" />
      </div>
      <div>
        <img src={img8} alt="" />
      </div>
      <div>
        <img src={img8} alt="" />
      </div>
      <div className={style.big}>
        <img src={img7} alt="" />
      </div>
      <div className={style.tall}>
        <img src={img9} alt="" />
      </div>
          <div>
        <img src={img8} alt="" />
      </div>
      <div className={style.tall}>
        <img src={img3} alt="" />
      </div>
    </div>
  );
}