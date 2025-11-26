import style from '../../assets/css/module/blog.module.scss';
import BlogBody from '../blog/BlogBody';
import { useState } from 'react';
import { blogData } from '../../data/blogData';
import EffectButton from '../button/EffectButton';

export default function Blog() {
    const [showCount, setShowCount] = useState(4);
    const totalBlogs = blogData.length;
    const initialCount = 4;

    const handleToggleBlogs = () => {
        if (showCount < totalBlogs) {
            setShowCount(totalBlogs);
        } else {
            setShowCount(initialCount);
        }
    };

    return (
        <div className={style.wrapper} id="blog">
            <div className={`container ${style.content}`}>
                <h1 className="title">Latest blog</h1>
                <BlogBody showCount={showCount} />
                <div className={style.buttonItem}>
                    <EffectButton 
                        type='button' 
                        children={showCount < totalBlogs ? 'More Blogs' : 'Less Blogs'} 
                        onClick={handleToggleBlogs}
                    />
                </div>
            </div>
        </div>
    )
}
