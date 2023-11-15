import {ButtonProps} from './Button.Model';
export default function Button({children, className, type, onClick, ...rest}:ButtonProps){
    return(
        <button className={className} type={type} onClick={onClick} {...rest}>{children}</button>
    );
}