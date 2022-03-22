import React, { useContext, useEffect, useState } from 'react';
import { PlusSmIcon, MinusIcon } from '@heroicons/react/outline';
import logo from '../../images/logo2.png';
import { CartContext } from '../../App';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/fakedb';
import storeData from '../../fakeData/store';
import Loader from '../Loader/Loader';
import Menu from '../Menu/Menu';

const PlaceOrder = () => {
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
        if (toBeAddedKey === sameFood.key) {
            let qty = count;
            let newCart;
            if (sameFood) {
                sameFood.quantity = qty;
                qty = sameFood.quantity;
                const otherFoods = cart.filter(fd => fd.key !== toBeAddedKey);
                newCart = [...otherFoods, sameFood];
            }
            setCart(newCart)
            addToDatabaseCart(sameFood.key, qty);
            setItemCount(0)
        }
    }
    // cart.map(fd => setItemCount(fd.quantity));
    const total = cart.reduce((total, food) => total + food.price * food.quantity, 0);
    // let total = 0;
    // for(let i = 0; i < cart.length; i++){
    //     const food = cart[i];
    //     total = total + food.price * food.quantity;
    // }
    let delivery = 0;
    if (total > 80) {
        delivery = 0;
    } else if (total > 40) {
        delivery = 2;
    } else if (total > 0) {
        delivery = 5;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = total + Number(tax) + delivery;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <>
        <Menu></Menu>
        <div className='w-full h-full mt-16'>
            <div className='w-10/12 justify-center items-left mx-auto'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-60">
                    <div className='text-sm'>
                        <h3 className='font-bold text-2xl'>Edit Delivery Details</h3>
                        <hr />
                        <div className='my-5'>
                            <input type="text" className='p-3 bg-gray-100 w-full rounded-md outline-none focus:ring-4 ring-gray-200' placeholder='Home Name' />
                        </div>
                        <div className='my-5'>
                            <input type="text" className='p-3 bg-gray-100 w-full rounded-md outline-none focus:ring-4 ring-gray-200' placeholder='Road No and Home No' />
                        </div>
                        <div className='my-5'>
                            <input type="text" className='p-3 bg-gray-100 w-full rounded-md outline-none focus:ring-4 ring-gray-200' placeholder='Flat, Suite and Floor' />
                        </div>
                        <div className='my-5'>
                            <input type="text" className='p-3 bg-gray-100 w-full rounded-md outline-none focus:ring-4 ring-gray-200' placeholder='Bussiness Name' />
                        </div>
                        <div className='my-5'>
                            <textarea type="text" className='p-3 bg-gray-100 w-full rounded-md outline-none focus:ring-4 ring-gray-200' placeholder='Add delivery instruction' ></textarea>
                        </div>
                        <button className='bg-rose-600 text-white p-3 w-full mb-5 rounded-md'>Save & Continue</button>
                    </div>
                    <div>
                        <div className='w-10/12 justify-end items-end'>
                            <div>
                                <p>From <span className='font-bold'>Gulshan Plaza Restaura GPR</span></p>
                                <p>Arriving in 20-30 min</p>
                                <p>108 Rd No 099</p>
                            </div>
                            {
                                cart.legth <= 0 ? <Loader></Loader> :
                                    cart.map(fd => fd.quantity <= 0 ? '' :
                                        <div className='bg-gray-100 p-3 my-4 items-center justify-between flex rounded-md'>
                                            <img src={logo} className='w-16' alt="" />
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
                                    <p className='text-right'>{delivery === 0 ? "Free" : "$ " + delivery}</p>
                                    <hr />
                                    <p className='text-right'>$ {formatNumber(grandTotal)}</p>
                                </div>
                            </div>
                            <button className='bg-gray-300 text-white p-3 w-full mb-5 rounded-md'>Place Order</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default PlaceOrder;