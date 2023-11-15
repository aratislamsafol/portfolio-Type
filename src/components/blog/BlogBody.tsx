import style from './blog.module.scss';
import img from '../../assets/img/blog-1.jpg';
import img1 from '../../assets/img/blog-2.jpg';
import img2 from '../../assets/img/blog-3.jpg';
export default function BlogBody() {
    const blogImage = [
        {id:1, src:img, date:'12/FEB/2022', comment:'I Will Tell You The Truth About Design In The Next 60 Seconds.' }, 
        {id:2, src:img1, date:'12/FEB/2022', comment:'I Will Tell You The Truth About Design In The Next 60 Seconds.' },
        {id:3, src:img2, date:'12/FEB/2022', comment:'I Will Tell You The Truth About Design In The Next 60 Seconds.' },
        {id:4, src:img, date:'12/FEB/2022', comment:'I Will Tell You The Truth About Design In The Next 60 Seconds.' },
    ];
    return (
    <div className={style.content}>
        {blogImage.map(bImg=>{
            return (
                <div className={style.blog_body} key={bImg.id}>
                    <img src={bImg.src} alt="blog Image " />
                    <div className={style.content_details}>
                        <span>{bImg.date} - WEBSITE - 1 COMMENT</span>
                        <h3>{bImg.comment}</h3>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
