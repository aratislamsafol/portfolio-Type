import Card from '../card/Card';
import style from '../../assets/css/module/experience.module.scss';
import img from '../../assets/img/a1.png';
export default function Experience() {
  return (
    <div>
        <div className="container">
            <h1 className="title">Experience</h1>
            <div className={`${style.experienced_box} ${style.withFlexGap}`}>
                <Card img={img} border={true} postion="Front-end Developer" company = "WeLab" jobType = "Remote " startData= "Jan 2019" lastDate = " Present" job_status = "FULL TIME" job_description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."/>
                <Card img={img} border={true} postion="Front-end Developer" company = "WeLab" jobType = "Remote " startData= "Jan 2019" lastDate = " Present" job_status = "FULL TIME" job_description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."/>
                <Card img={img} border={true} postion="Front-end Developer" company = "WeLab" jobType = "Remote " startData= "Jan 2019" lastDate = " Present" job_status = "FULL TIME" job_description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."/>
            </div>
        </div>
    </div>
    )
}
