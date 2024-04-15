import React, { useEffect } from 'react';

import { Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Shoppick from '../../Json/Shoppick.json';

import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Cateslider = ({datas}) => {
    const breaks = {
        '1024': {
            slidesPerView: 4,
        }
    }

    console.log(datas);

    return (
        <div className="catesliders">
            <Container>
                <Swiper slidesPerView={4} spaceBetween={24} breakpoints={breaks} modules={[Grid]}>
                    {
                        datas.splice(0,10).map((datanum)=>(
                            <SwiperSlide key={datanum.id}>
                                <Link to="/">
                                    <div className="imgpart">
                                        <img src={datanum.image} alt="Dataimage" />
                                    </div>
                                    <div className="textpart">
                                        <div className="titlewrap">
                                            <h2>{datanum.title}</h2>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                    <SwiperSlide>
                        <button>
                            <i>
                                <img src="./src/assets/icon.svg" alt="전체보기" />
                            </i>
                            <span>전체보기</span>
                        </button>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    );
};

export default Cateslider;