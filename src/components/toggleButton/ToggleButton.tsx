import style from './toggle_btn.module.scss';
export default function ToggleButton(){
    return(
        <div className={style.content}>
            <input type="checkbox" id="btn"/>
            <label>
                <span className={style.thumb}></span>
            </label>
            <div className={style.lights}>
                <span className={style.light_off}></span>
                <span className={style.light_on}></span>
            </div>
        </div>
    );
}