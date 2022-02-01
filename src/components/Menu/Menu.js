import React, { useState } from 'react';
import logo from '../../images/logo2.png';
import { ShoppingCartIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const Menu = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!false);
    }
    return (
            <div className='overflow-hidden bg-white shadow-md'>
                <div className='w-10/12 relative mx-auto px-4 py-5'>
                    <div className="grid grid-cols-2">
                        <div>
                            <img src={logo} alt="" className='w-28' />
                        </div>
                        <div className='text-right items-center justify-center hidden sm:block'>
                            <a href="" className='px-4 -mt-2 inline-flex items-center font-medium text-sm'><ShoppingCartIcon className="h-4 w-4 my-auto" /></a>
                            <a href="" className='px-4 py-2 inline-flex items-center font-medium text-sm rounded-md hover:bg-gray-100'>Login</a>
                            <a href="" className='px-4 py-1 inline-flex items-center font-medium text-sm bg-rose-500 rounded-full text-white'>SignUp</a>
                        </div>
                        <div onClick={handleMenu} className="text-right flex justify-end items-center sm:hidden">
                            <MenuIcon className='w-4 h-4' />
                        </div>
                    </div>
                </div>
                <div className={menu === true ? 'block absolute z-10 top-0 w-11/12 m-3 shadow-lg p-3 rounded-md ring-1 ring-black ring-opacity-5 transition duration-700 transform origin-top-right bg-white' : 'transition transform origin-top-right hidden'}>
                    <div className="grid grid-cols-2">
                        <div>
                            <img src={logo} alt="" className='w-28' />
                        </div>
                        <div className="text-right flex justify-end items-center">
                            <XIcon onClick={() => setMenu(false)} className='w-4 h-4' />
                        </div>
                    </div>
                    <div className='mt-3 items-center'>
                        <a href="" className='px-4 py-2 block items-center font-medium text-sm rounded-md hover:bg-gray-100'><ShoppingCartIcon className="h-4 w-4 my-auto" /></a>
                        <a href="" className='px-4 py-2 block items-center font-medium text-sm rounded-md hover:bg-gray-100'>Login</a>
                        <a href="" className='px-4 py-2 block items-center font-medium text-sm rounded-md hover:bg-gray-100'>SignUp</a>
                    </div>
                </div>
            </div>
    );
};

export default Menu;