import style from './blog.module.scss';
import { useNavigate } from 'react-router-dom';
import { blogData } from '../../data/blogData';

interface BlogBodyProps {
    showCount?: number;
}

export default function BlogBody({ showCount = 4 }: BlogBodyProps) {
    const navigate = useNavigate();
    const displayedBlogs = blogData.slice(0, showCount);

    const handleBlogClick = (blogId: number) => {
        // Save scroll position before navigating
        const scrollPosition = window.scrollY;
        sessionStorage.setItem('blogScrollPosition', scrollPosition.toString());
        sessionStorage.setItem('blogId', blogId.toString());
        navigate(`/blog/${blogId}`);
    };

    return (
        <div className={style.content}>
            {displayedBlogs.map((blog) => {
                return (
                    <div 
                        className={style.blog_body} 
                        key={blog.id}
                        onClick={() => handleBlogClick(blog.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={blog.src} alt="blog Image" />
                        <div className={style.content_details}>
                            <span>{blog.date} - {blog.category}</span>
                            <h3>{blog.title}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
