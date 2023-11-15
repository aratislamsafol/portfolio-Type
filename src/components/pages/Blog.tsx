import style from '../../assets/css/module/blog.module.scss';
import BlogBody from '../blog/BlogBody';

import EffectButton from '../button/EffectButton';
export default function Blog() {
    
    return (
        <div className={style.wrapper}>
            <div className={`container ${style.content}`}>
                <h1 className="title">Latest blog</h1>
                <BlogBody />
                <div className={style.buttonItem}>
                    <EffectButton type='button' children='More Blogs' />
                </div>
            </div>
        </div>
    )
}
