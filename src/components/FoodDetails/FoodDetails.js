import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import storeData from '../../fakeData/store';
import { ShoppingCartIcon, PlusSmIcon } from '@heroicons/react/outline';
import { CartContext } from "../../App";
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/fakedb';

const FoodDetails = () => {
    const {key} = useParams();
    const [itemCount, setItemCount] = useState(1);
    const foodDetail = storeData.find(fd => fd.key === key);
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        const existingCart = getDatabaseCart();
        const foodKeys = Object.keys(existingCart);
        const previousCart = foodKeys.map(existingKey => {
            const food = storeData.find(fd => fd.key === existingKey);
            food.quantity = existingCart[existingKey];
            return food;
        })
        setCart(previousCart);
    }, []);

    const handleAddCart = (food, count) => {
        const toBeAddedKey = food.key;
        const sameFood = cart.find(fd => fd.key === toBeAddedKey);
        let qty = count;
        let newCart;
        if(sameFood){
            qty = sameFood.quantity + count;
            sameFood.quantity = qty;
            const others = cart.filter(fd => fd.key !== toBeAddedKey);
            newCart = [...others, sameFood];
        }else{
            food.quantity = count;
            newCart = [...cart, food];
        }
        setCart(newCart);
        addToDatabaseCart(food.key, qty);
        setItemCount(1);
    }
    return (
        <>
            <div className="justify-center text-center w-10/12 mx-auto mt-14">
                <div className="justify-between">
                    <button onClick={() => window.history.go(-1)} className='px-6 decoration-2 underline-offset-4 hover:text-rose-600 hover:underline'>Breakfast</button>
                    <button onClick={() => window.history.go(-1)}  className='px-6 decoration-2 underline-offset-4 hover:text-rose-600  hover:underline'>Lunch</button>
                    <button onClick={() => window.history.go(-1)}  className='px-6 decoration-2 underline-offset-4 hover:text-rose-600 hover:underline'>Dinner</button>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 text-left">
                    <div>
                        <h2 className='text-4xl font-bold'>{foodDetail.name}</h2>
                        <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sunt tenetur pariatur qui a nemo maxime placeat cumque suscipit natus labore modi eveniet vero non soluta fuga maiores quaerat ratione nobis in doloribus, distinctio dignissimos! A, dolorem perferendis. Consequatur, voluptatem! Iste nobis velit obcaecati voluptas facere libero! Deserunt tenetur ex cum veritatis dicta iusto impedit laborum quos at mollitia fugit. Perspiciatis quasi nostrum, libero reiciendis numquam corporis modi dolore quo ab sequi quod?</p>
                        <div className='flex items-center my-4'>
                            <p className='text-3xl font-bold mr-4'>{foodDetail.price} $</p>
                            <div className='border rounded-full flex items-center p-2'>
                                <button onClick={()=>setItemCount(itemCount - 1)} className='px-2'><PlusSmIcon className='w-5' /></button>
                                <span>{itemCount}</span>
                                <button onClick={()=>setItemCount(itemCount + 1)} className='px-2'><PlusSmIcon className='w-5 text-rose-600' /></button>
                            </div>
                        </div>
                        <button onClick={() => handleAddCart(foodDetail, itemCount)} className='flex bg-rose-600 px-4 py-2 rounded-full text-white items-center'><ShoppingCartIcon className='w-4 mr-2' /> Add</button>
                    </div>
                    <div>
                        <img src={foodDetail.img} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodDetails;