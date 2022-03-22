import React, { useContext, useState, useEffect } from 'react';
import logo from '../../images/logo2.png';
import { CartContext } from '../../App';
import { MinusIcon, PlusSmIcon } from '@heroicons/react/outline';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/fakedb';
import storeData from '../../fakeData/store';
import Loader from '../Loader/Loader';
import Menu from '../Menu/Menu';

const Cart = () => {
    const [itemCount, setItemCount] = useState(0);
    const [cart, setCart] = useContext(CartContext);
    useEffect(() => {
        const existingCart = getDatabaseCart();
        const foodKeys = Object.keys(existingCart);
        const previousCart = foodKeys.map(existingKey => {
            const food = storeData.find(fd => fd.key === existingKey);
            food.quantity = existingCart[existingKey];
            return food;
        });
        setCart(previousCart);
    }, []);

    const handleFoodCart = (key, count) => {
        const toBeAddedKey = key;
        const sameFood = cart.find(fd => fd.key === toBeAddedKey);
        if(sameFood.key === toBeAddedKey){
            let qty = count;
            let newCart;
            if(sameFood){
                sameFood.quantity = qty;
                qty = sameFood.quantity;
                const otherFoods = cart.filter(fd => fd.key !== toBeAddedKey);
                newCart = [...otherFoods, sameFood];
            }
            setCart(newCart);
            addToDatabaseCart(sameFood.key, qty);
            setItemCount(0);
        }
    }
    
    const total = cart.reduce((total, food) => total + food.price * food.quantity, 0);
    let delivery = 0;
    if(total > 80){
        delivery = 0;
    }else if(total > 40){
        delivery = 2;
    }else if(total > 0){
        delivery = 5;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = total + Number(tax) + delivery;
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    return (
        <>
        <Menu></Menu>
        <div className='w-10/12 text-center mx-auto'>
            <h2 className='text-2xl font-bold my-16'>Cart Details</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-60">
                <div>
                {
                    cart.length < 0 ? <Loader></Loader> :
                    cart.map(fd => fd.quantity <= 0 ? '' :
                        <div className='bg-gray-100 p-3 my-4 items-center justify-between flex rounded-md'>
                            <img src={fd.img} className='w-16' alt="" />
                            <div className='px-2'>
                                <h4 className='font-bold'>{fd.name}</h4>
                                <p className='font-bold text-xl text-rose-600'>{fd.price} $</p>
                                <p className='text-sm text-gray-400'>Delivery free</p>
                            </div>
                            <div className='items-center flex'>
                                <button onClick={() => handleFoodCart(fd.key, fd.quantity - 1)} className='px-2'><MinusIcon className='w-5' /></button>
                                <span className='bg-white py-2 px-3 rounded-md'>{fd.quantity + itemCount}</span>
                                <button onClick={() => handleFoodCart(fd.key, fd.quantity + 1)} className='px-2'><PlusSmIcon className='w-5 text-rose-600' /></button>
                            </div>
                        </div>
                    )
                }
                </div>
                <div className='grid grid-cols-2'>
                    <div className='text-left'>
                        <p className='flex'>Subtotal</p>
                        <p>Tax</p>
                        <p>Delivery Fee</p>
                        <p>Total</p>
                    </div>
                    <div className=''>
                        <p className='text-right'>$ {formatNumber(total)}</p>
                        <p className='text-right'>$ {tax}</p>
                        <p className='text-right'>{delivery === 0 ? "Free" : "$ "+delivery}</p>
                        <hr />
                        <p className='text-right'>$ {formatNumber(grandTotal)}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Cart;