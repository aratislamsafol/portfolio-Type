import style from './carousel.module.scss';
type CarouselProps = {
    img: string,
    comment: string,
    userName: string,
    position: string,
    companyName:string,
}
export default function CarouselCard({img, comment, userName, position, companyName}:CarouselProps){
    return(
        <div className={style.wrapper} style={{margin:'10px'}}>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.left_content}>
                        <img src={img}  alt="carousel Image" />
                    </div>

                    <div className={style.right_content}>
                        <p>{comment}</p>
                        <h3>{userName}</h3>
                        <span>{position} at {companyName}</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}