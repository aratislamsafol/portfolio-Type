import style from './skillbar.module.scss';
export default function Skill() {
  return (
    <div className={style.skii_bar_wrapper}>
        <p>Html</p>
        <div className={style.skill_bar}>
            <div className={style.skill_bar_in} style={{width: '80%'}}>
                <span data-toggle="tooltip" title="72%"></span>
            </div>
        </div>
    </div>
  )
}
