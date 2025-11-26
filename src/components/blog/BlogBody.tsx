import style from './blog.module.scss';
import img from '../../assets/img/blog-1.jpg';
import img1 from '../../assets/img/blog-2.jpg';
import img2 from '../../assets/img/blog-3.jpg';
export default function BlogBody() {
    const blogImage = [
        {id:1, src:img, date:'15/MAR/2024', comment:'Building Scalable Microservices Architecture: Best Practices and Patterns' }, 
        {id:2, src:img1, date:'08/FEB/2024', comment:'Modern Frontend Development: React Performance Optimization Techniques' },
        {id:3, src:img2, date:'22/JAN/2024', comment:'Cloud-Native Applications: A Complete Guide to AWS Deployment Strategies' },
        {id:4, src:img, date:'05/DEC/2023', comment:'Code Review Best Practices: How to Write Maintainable and Clean Code' },
    ];
    return (
    <div className={style.content}>
        {blogImage.map((bImg, id)=>{
            return (
                <div className={style.blog_body} key={bImg.id}>
                    <img src={bImg.src} alt="blog Image " />
                    <div className={style.content_details}>
                        <span>{bImg.date} - Blog-{id+1}</span>
                        <h3>{bImg.comment}</h3>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
