import React from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { setActiveCategory } from '../../Store/Categories/category.slice';

const Categorytab = ({text,categoryname}) => {
    const dispatch = useDispatch();
    const category = useSelector((state)=>state.categorySlice);
    const getActivecategory = () => {
        dispatch(setActiveCategory(categoryname));
    }

    return (
        <li>
            <button className={`${categoryname === category ? 'active': ''}`} onClick={getActivecategory}>{text}</button>
        </li>
    );
};

export default Categorytab;