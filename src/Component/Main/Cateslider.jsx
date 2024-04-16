import React, { useEffect } from 'react';

import { Container } from 'react-bootstrap';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import Shoppick from '../../Json/Shoppick.json';

import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Cateslider = ({num}) => {
    const breaks = {
        '1024': {
            slidesPerView: 3,
        },
        '756': {
            slidesPerView: 4.5
        }

    }

    const categoryok = useSelector((state)=>state.categorySlice);

    return (
        <div className={`cateslider ${categoryok === Shoppick[num].type ? 'on': ''}`}>
            <Container>
                <Swiper slidesPerView={2.5} spaceBetween={24} breakpoints={breaks} >
                    {
                        Shoppick[num].details.map((datanum)=>(
                            <SwiperSlide>
                                <Link to="/">
                                    <div className="imgpart">
                                        <img src={datanum.images} alt="Dataimage" />
                                    </div>
                                    <div className="textpart">
                                        <div className="pricewrap d-flex align-items-center">
                                            {
                                                datanum.isSale && <span className="sales">{Math.floor(((datanum.original_price - datanum.saled_price) / (datanum.original_price))*100)}%</span>
                                            }
                                            {
                                                datanum.isSale && <span className="saled">{parseInt(datanum.saled_price).toLocaleString()}원</span>
                                            }
                                            {
                                                !datanum.isSale && <span className="original">{parseInt(datanum.original_price).toLocaleString()}원</span>
                                            }
                                        </div>
                                        <div className="titlewrap">
                                            <h2>{datanum.name}</h2>
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