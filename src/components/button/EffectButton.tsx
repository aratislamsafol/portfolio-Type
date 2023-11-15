import { ButtonProps } from './Button.Model';
import style from './effect_button.module.scss';

export default function EffectButton({children, type}:ButtonProps) {
  return (
    <div>
        <button type={type} className={style.button}>{children}</button>
    </div>
  )
}
