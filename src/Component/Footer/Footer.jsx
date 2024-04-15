import React from 'react';

import './footer.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <ul className="top__menu d-flex align-items-center justify-content-center">
                    <li>
                        <Link to="javascript:void(0)">회사 소개</Link>
                    </li>
                    <li>
                        <Link to="/agree">이용 약관</Link>
                    </li>
                    <li>
                        <Link to="/indivi">개인 정보 처리 방침</Link>
                    </li>
                    <li>
                        <Link to="/locate">위치 기반 서비스 이용 약관</Link>
                    </li>
                    <li>
                        <Link to="/triprule">여행 약관</Link>
                    </li>
                    <li>
                        <Link to="/bohum">여행자 보험 가입 안내</Link>
                    </li>
                    <li></li>
                </ul>
            </Container>
        </div>
    );
};

export default Footer;