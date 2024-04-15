import React from 'react';

import { Categoryname } from '../../Store/Categories/category.type';
import Categorytab from './Categorytab';

const FilterCategory = () => {
    return (
        <ul className="filter__category d-flex justify-content-center align-items-center">
            <Categorytab text="쎈 딜" categoryname={Categoryname.strongdeal}></Categorytab>
            <Categorytab text="베스트" categoryname={Categoryname.best}></Categorytab>
            <Categorytab text="인싸위크" categoryname={Categoryname.insider}></Categorytab>
            <Categorytab text="코카콜라" categoryname={Categoryname.cocacola}></Categorytab>
            <Categorytab text="소담상회" categoryname={Categoryname.sodam}></Categorytab>
        </ul>
    );
};

export default FilterCategory;