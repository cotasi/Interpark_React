import React from 'react';

import { Link } from 'react-router-dom';

import './main.scss';

import { Title } from '../commonui';
import FilterCategory from './FilterCategory';
import Categorycon from './Categorycon';
import { Categoryname } from '../../Store/Categories/category.type';

const ShoppingSelect = () => {
    return (
        <section id="mdselect">
            <Title>
                <h2>쇼핑추천</h2>
                <p>
                    할인이 세다! 지금, 특가 상품을 확인하세요.
                </p>
            </Title> 
            <FilterCategory /> 
            <Categorycon />
            <div id="shopinghome">
                <Link to="/shopping" className="shopping__home">쇼핑 홈 바로가기</Link>
            </div>
        </section>
    );
};

export default ShoppingSelect;