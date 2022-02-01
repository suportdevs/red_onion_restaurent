import React from 'react';
import breakfastData from '../../fakeData/breakfast';
import BreakfastStore from '../BreakfastStore/BreakfastStore';
import { Link, useParams } from 'react-router-dom';

const Foods = () => {
    const prams = useParams();
    breakfastData.map(foodData => )
    const foodData = breakfastData.filter(data => data.category === `'${prams}'`);
    foodData.map(food => console.log(food));
    return (
        <>
            <div className="justify-center text-center w-10/12 mx-auto mt-14">
                <div className="justify-between">
                    <Link to="/breakfast" className='px-6 decoration-2 underline-offset-4 hover:text-rose-500 hover:font-bold hover:underline'>Breakfast</Link>
                    <Link to="/lunch" className='px-6 decoration-2 underline-offset-4 hover:text-rose-500 hover:font-bold hover:underline'>Lunch</Link>
                    <Link to="/dinner" className='px-6 decoration-2 underline-offset-4 hover:text-rose-500 hover:font-bold hover:underline'>Dinner</Link>
                </div>
                <div className="mt-16 grid grid-cols-3 gap-3">
                    <div>
                        {/* <BreakfastStore></BreakfastStore> */}
                    </div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        </>
    );
};

export default Foods;