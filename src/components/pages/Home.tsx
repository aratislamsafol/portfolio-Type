import style from '../../assets/css/module/home.module.scss';
import img from '../../assets/img/home-banner.png';
import AutoTypingEffect from '../typeString/Type';
export default function Home() {
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
        <div className={style.wrapper} id="home">
            <div className={style.container}>
                <div className={`${style.content}`}>
                    <img src={img} alt="banner Img" />
                </div>
                <div className={style.info}>
                    <h1 style={{marginTop: '10px'}}>Khan Kamrul Islam</h1>
                    <AutoTypingEffect />
            
                    <div className={style.social_icon}>
                        {socialIcon.map((icon, index)=>
                            <a href="" key={index}><i className={`fa-brands ${icon.label}`}></i></a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

