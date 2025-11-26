import { ButtonProps } from './Button.Model';
import style from './effect_button.module.scss';

export default function EffectButton({children, type, onClick}:ButtonProps) {
  return (
    <div>
        <button type={type} className={style.button} onClick={onClick}>{children}</button>
    </div>
  )
}
