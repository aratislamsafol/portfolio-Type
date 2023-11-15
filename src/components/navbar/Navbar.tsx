import style from './navbar.module.scss';
import {useState} from 'react';
import img1 from '../../assets/img/about-me.jpg';
import { Spin as Hamburger } from 'hamburger-react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const collapseNavbar = ()=>{
        return setIsOpen(!isOpen);
    }
    const menuItem = [
        {
            label: 'Home',
            to: '/',
        },
        {
            label: 'ABOUT me',
            to: '/',
        },
        {
            label: 'services',
            to: '/',
        },
        {
            label: 'portfolio',
            to: '/',
        },
        {
            label: 'blogs',
            to: '/',
        },
        {
            label: 'contact me',
            to: '/',
        },
    ];

    const socialIcon = [
        {
            label: 'fa-facebook-f',
            to:''
        },
        {
            label: 'fa-twitter',
            to:''
        },
        {
            label: 'fa-linkedin-in',
            to:''
        },
        
        {
            label: 'fa-instagram',
            to:''
        },
        {
            label: 'fa-pinterest',
            to:''
        },
    ];
    return (
        <div className={style.wrapper}>
            <div className={style.navbar_flex}>
                <div className={style.logo}>
                    <h4>Arat Islam</h4>
                </div>
                <div className={style.nav_bars}>
                    <Hamburger size={25} direction="right" onToggle={collapseNavbar} />
                </div>
            </div>
           
            <div className={`${style.off_canvas} ${isOpen ? style.off_canvas_open:''}`}>
               <div className={style.nav_wrap}>
                    <div className={style.top}>
                        <div className={style.bg_top}></div>
                        <div className={style.top_img}>
                            <img src={img1} alt="Navbar Image" />
                            <h4 style={{textAlign:'center', letterSpacing:'3px', fontSize:'20px'}}>Kamrul</h4>
                        </div>
                    </div>
                    <div className={style.menu}>
                        <ul>
                            {menuItem.map(item=>
                                <li className={style.active}><a href={item.to}><i className="fa-solid fa-house"></i><p>{item.label}</p></a></li>
                            )}
                        </ul>
                    </div>
                    <div className={style.social_icon}>
                        {socialIcon.map(icon=>
                            <a href=""><i className={`fa-brands ${icon.label}`}></i></a>
                        )}
                    </div>
               </div>
            </div>
        </div>
    )
}
