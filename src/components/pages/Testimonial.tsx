import style from '../../assets/css/module/testimonial.module.scss'
import Carousel from '../carousel/Carousel';
import styled from 'styled-components';

const CustomSlickNext = styled.div`
  .slick-next {
    right: 20px !important;
  }
`;
export default function Testimonial(){
    return (
        <div className={style.wrapper}>
            <div className="container">
                <h1 className="title" style={{marginTop:'0', paddingTop:'0'}}>Testimonials</h1> 
                <CustomSlickNext>
                    <Carousel />
                </CustomSlickNext>
            </div>
        </div>
        
    );
}