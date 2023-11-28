import style from './skillbar.module.scss';
type SkillProps ={
  name: string;
  width: number;
}
export default function Skill({name,width}:SkillProps) {
  return (
    <div className={style.skii_bar_wrapper}>
        <p>{name}</p>
        <div className={style.skill_bar}>
            <div className={style.skill_bar_in} style={{width: `${width}%`}}>
                <span data-toggle="tooltip" title="72%"></span>
            </div>
        </div>
    </div>
  )
}
