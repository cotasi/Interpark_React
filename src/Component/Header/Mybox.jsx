import React from 'react';

import { Link } from 'react-router-dom';

import { FiChevronRight } from "react-icons/fi";

import './Mybox.scss';

const Mybox = () => {
    
    return (
        <div className="mybox">
            <button><span>로그인</span><FiChevronRight /></button>
            <div className="point__area">
                <div className="main__points d-flex">
                    <div className="ai__points">
                        <div className="desc">
                            <img src="./src/assets/icon_ipoint.svg" alt="아이포인트" />
                            <span>포인트</span>
                        </div>
                        <span className="number">-</span>
                    </div>
                    <div className="nol__points">
                        <div className="desc">
                            <img src="./src/assets/icon_nol.svg" alt="놀포인트" />
                            <span>포인트</span>
                        </div>
                        <span className="number">-</span>
                    </div>
                </div>
                <div className="other__points">
                    <div className="tour__coupon"><span>투어 쿠폰</span><span>-</span></div>
                    <div className="ticket__coupon"><span>티켓 쿠폰</span><span>-</span></div>
                    <div className="reser"><span>예매권</span><span>-</span></div>
                </div>
            </div>

            <div className="mypage__area">
                <h2>마이페이지</h2>
                <ul className="d-flex">
                    <li>
                        <Link to="/tour">투어</Link>
                    </li>
                    <li>
                        <Link to="/ticket">티켓</Link>
                    </li>
                    <li>
                        <Link to="/shopping">쇼핑</Link>
                    </li>
                    <li>
                        <Link to="/books">도서</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Mybox;