import React, { useState, useEffect } from 'react';

import Axios from 'axios';

import Cateslider from './Cateslider';
import Catesliders from './Catesliders';

import Shoppick from '../../Json/Shoppick.json';

const Categorycon = ({categorynames}) => {
    const [best,setbest] = useState(null);  
    const [inssa,setinssa] = useState(null);
    const [load,setload] = useState(false);
    const [error,seterror] = useState(null);
    
    const fetchBest = async () => {
        try {
            setbest(null);
            seterror(null);
            setload(true);

            const response = await Axios.get('https://fakestoreapi.com/products');
            setbest(response.data);
            console.log(response.data)
        }catch(errors) {
            seterror(errors);
            console.error(error);
        }
    }

    const fetchinssa = async () => {
        try {
            setinssa(null);
            seterror(null);
            setload(true);

            const response = await Axios.get('https://fakestoreapi.com/products');
            setinssa(response.data);
            console.log(response.data)
        }catch(errors) {
            seterror(errors);
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchBest();
    },[]);

    useEffect(()=>{
        fetchinssa();
    },[])

    return (
        <div className="catecon">
            {Shoppick && <Cateslider/>}
        </div>
    );
};

export default Categorycon;