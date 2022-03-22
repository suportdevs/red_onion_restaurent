import React from 'react';
import logo from '../../images/logo2.png';

const Delivery = () => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    return (
        <div className='w-full h-full'>
            <div className='w-10/12 justify-center items-left mx-auto'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-60">
                    <div className='text-sm'>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <div className='w-10/12 justify-end bg-gray-100 p-5 text-md text-gray-500'>
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            <div className='bg-white p-2 rounded-md my-6'>
                                <div>
                                    <h4 className='font-bold text-lg text-black'>Your Location</h4>
                                    <p>105 Rd No 9</p>
                                    <h4 className='font-bold text-lg text-black'>Shop Address</h4>
                                    <p>Gulshan Plaza Restaura GPR</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='font-bold text-3xl text-black'>{ time }</h2>
                                <p>Estimated delivery time</p>
                            </div>
                            <div className='bg-white rounded-md p-2 flex items-center justify-between my-6'>
                                <img className='w-32' src={logo} alt="" />
                                <div>
                                <h4 className='font-bold text-lg text-black'>Hamim</h4>
                                <p>Your Raider</p>
                                </div>
                            </div>
                            
                            <button className='bg-rose-600 text-white p-3 w-full mb-5 rounded-md'>Contact</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Delivery;