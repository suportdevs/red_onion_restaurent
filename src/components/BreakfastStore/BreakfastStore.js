import React from 'react';
import { useParams } from 'react-router-dom';
import breakfasts from '../../fakeData/breakfast';

const BreakfastStore = () => {
    const pram = useParams();
    console.log(pram);
    return (
        <div>
            <img src={breakfasts[0].img} alt="" />
            <h5>{ breakfasts[0].name }</h5>
            <p>How we dream about our future</p>
            <p>{breakfasts[0].price}</p>
        </div>
    );
};

export default BreakfastStore;