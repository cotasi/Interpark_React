import React from 'react';

import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';

import { Title } from '../commonui';

import { Container } from 'react-bootstrap';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.scss';

const Slider = () => {
    const imagelink = [
        './src/assets/Slide/Slide_main_01.avif',
        './src/assets/Slide/Slide_main_02.avif',
        './src/assets/Slide/Slide_main_03.avif'
    ];

    const breakpoints = {
        756: {
            slidesPerView: 2
        }
    }
    return (
        <section id="slider">
            <Container>
                <Title className="none">
                    <h2>오늘의 픽</h2>
                    <p>인터파크에서 할인 혜택을 꼭 챙기세요.</p>
                </Title>
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} breakpoints={breakpoints} modules={[Navigation,Pagination]} navigation={{clickable: true}} pagination={{clickable: true}}>
                    {
                        imagelink.map((item,idx)=>(<SwiperSlide key={idx}><img src={item} alt="swiper_slide"></img></SwiperSlide>))
                    }
                </Swiper>
            </Container>
        </section>
    );
};

export default Slider;