import React, { useContext, useState, useEffect } from 'react';
import storeData from '../../fakeData/store';
import Foods from '../Foods/Foods';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import { getDatabaseCart } from '../../utilities/fakedb';
import Loader from '../Loader/Loader';

const Store = () => {
    // const {breakfast, lunch, dinner} = useParams();
    // console.log(breakfast, lunch, dinner);
    const [cart, setCart] = useContext(CartContext);
    const defaultFood = storeData.filter(store => store.category === "breakfast");
    const [food, setFood] = useState(defaultFood);
    
    const storehandler = ($category) => {
        const newStore = storeData.filter(store => store.category === $category);
        setFood(newStore);
    }
    useEffect(() => {
        const existingCart = getDatabaseCart();
        const foodKeys = Object.keys(existingCart);
        const previousCart = foodKeys.map(existingKey => {
            const food = storeData.find(fd => fd.key === existingKey);
            food.quantity = existingCart[existingKey];
            return food
        });
        setCart(previousCart);
    }, []);
    return (
        <>
            <div className="justify-center text-center w-10/12 mx-auto mt-14">
                <div className="justify-between">
                    <Link to="/breakfast" onClick={() => storehandler('breakfast')} className={food[0].category === 'breakfast' ? 'px-6 text-rose-600 font-bold underline underline-offset-4 decoration-2' : 'px-6 decoration-2 underline-offset-4 hover:text-rose-600 hover:underline'}>Breakfast</Link>
                    <Link to="/lunch" onClick={() => storehandler('lunch')} className={food[0].category === 'lunch' ? 'px-6 text-rose-600 font-bold underline underline-offset-4 decoration-2' : 'px-6 decoration-2 underline-offset-4 hover:text-rose-600  hover:underline'}>Lunch</Link>
                    <Link to="/dinner" onClick={() => storehandler('dinner')} className={food[0].category === 'dinner' ? 'px-6 text-rose-600 font-bold underline underline-offset-4 decoration-2' : 'px-6 decoration-2 underline-offset-4 hover:text-rose-600 hover:underline'}>Dinner</Link>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {
                        food.map(fd => <div><Foods food={fd} key={fd.key}></Foods></div>) ?? <Loader></Loader>
                    }
                </div>
                <div className="justify-center mt-16">
                    {
                        cart.length > 0 ?
                        <Link to="/order" className='bg-rose-600 p-4 rounded text-white'>Checkut Your Food</Link> :
                        <button className='bg-rose-600 p-4 rounded text-white disabled:opacity-50' disabled>Checkut Your Food</button>
                    }
                </div>
            </div>
        </>
    );
};

export default Store;