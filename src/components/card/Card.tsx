
import style from './card.module.scss';
import {CardProps} from './Card.Module';
export default function Card({img, hover, border, postion, company, jobType, startData, lastDate, job_status, job_description}:CardProps) {

  return (
    <>
        <div className={`${style.wrapper}  ${hover?`${style.all_hover}`:''} ${style.padding}`}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.content_img}>
                        <img src={img} alt="" />
                    </div>
                    
                    <div className={style.details}>
                        {postion? <h3>{postion}</h3>:''}
                        {company?<span>{company} {jobType} {startData} - {lastDate}</span>:''}
                        {job_status?<span className={style.job_status}>{job_status}</span>:''}
                        
                        <p>{job_description}</p>
                    </div>
                </div>
            </div>
        </div>
        {border?<div className={style.border}></div>:''}

    </>
  )
}
