import React from 'react';
import { Link } from 'react-router-dom';

const Foods = (props) => {
    const {img, name, category, price, key} = props.food;
    return (
        <div className="p-4 shadow-md hover:shadow-2xl">
            <Link to={`/food-details/${key}`}>
                <img src={img} alt="" />
                <h4 className='font-bold'>{name}</h4>
                <p>{category}</p>
                <p className="text-rose-600">Price {price} $</p>
            </Link>
        </div>
    );
};

export default Foods;