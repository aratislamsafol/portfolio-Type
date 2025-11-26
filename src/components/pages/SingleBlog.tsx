import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { blogData } from '../../data/blogData';
import style from './singleBlog.module.scss';

export default function SingleBlog() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog = blogData.find(b => b.id === parseInt(id || '0'));

  useEffect(() => {
    if (blog) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [blog]);

  const handleClose = () => {
    // Mark that we're returning from blog page (no loader needed)
    sessionStorage.setItem('returningFromBlog', 'true');
    
    navigate('/');
    // Restore scroll position after navigation
    setTimeout(() => {
      const savedPosition = sessionStorage.getItem('blogScrollPosition');
      if (savedPosition) {
        window.scrollTo({
          top: parseInt(savedPosition),
          behavior: 'instant'
        });
        sessionStorage.removeItem('blogScrollPosition');
        sessionStorage.removeItem('blogId');
      } else {
        // Fallback: scroll to blog section if no saved position
        const blogSection = document.getElementById('blog');
        if (blogSection) {
          blogSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!blog) {
    return (
      <div className={style.overlay} onClick={handleBackdropClick}>
        <div className={style.content}>
          <div className={style.closeButton} onClick={handleClose}>×</div>
          <p>Blog not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.overlay} onClick={handleBackdropClick}>
      <div className={style.content}>
        <button className={style.closeButton} onClick={handleClose} aria-label="Close">
          ×
        </button>
        <div className={style.blogHeader}>
          <img src={blog.src} alt={blog.title} className={style.blogImage} />
          <div className={style.blogMeta}>
            <span className={style.category}>{blog.category}</span>
            <span className={style.date}>{blog.date}</span>
            <span className={style.readTime}>{blog.readTime}</span>
          </div>
          <h1 className={style.blogTitle}>{blog.title}</h1>
          <div className={style.authorInfo}>
            <span>By {blog.author}</span>
          </div>
        </div>
        <div className={style.blogBody}>
          <div className={style.blogContent}>
            {blog.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                const text = paragraph.replace(/\*\*/g, '');
                return <h2 key={index} className={style.subHeading}>{text}</h2>;
              }
              if (paragraph.startsWith('**')) {
                const parts = paragraph.split('**');
                return (
                  <p key={index} className={style.paragraph}>
                    {parts.map((part, i) => 
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                  </p>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                return (
                  <ul key={index} className={style.list}>
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index} className={style.paragraph}>{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
