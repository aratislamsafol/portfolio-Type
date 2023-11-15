import style from '../../assets/css/module/expertise.module.scss';
import Card from '../card/Card';
import img from '../../assets/img/a1.png';
import SpaceBar from '../spacebar/SpaceBar';
export default function Expertise() {
  return (
    <div className={style.wrapper}>
        <div className="container">
            <h1 className='title'>What I DO?</h1>
            <div className={style.content}>
                <Card img={img} hover postion="Web Design" job_description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Card img={img} hover postion="Web Development" job_description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Card img={img} hover postion="SEO Marketing" job_description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Card img={img} hover postion="Web Design" job_description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Card img={img} hover postion="Web Development" job_description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <Card img={img} hover postion="SEO Marketing" job_description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>

            <SpaceBar/>
        </div>
    </div>
  )
}
