import React from 'react';
import logo from '../../images/logo.png';
import { DeviceMobileIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline';

const Footer = () => {
    return (
        <div className='mt-16 bg-gray-900 text-white py-16'>
            <div className='w-10/12 mx-auto'>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-4 text-sm">
                    <div>
                        <img src={logo} className='w-52' alt="" />
                    </div>
                    <div>
                        <a href="" className='block py-1 transition ease-in-out delay-150 hover:text-rose-600 hover:pl-2 duration-300'>About Online Food</a>
                        <a href="" className='block py-1 hover:text-rose-600 hover:pl-2'>Read our Blog</a>
                        <a href="" className='block py-1 hover:text-rose-600 hover:pl-2'>Sign up to Deliver</a>
                        <a href="" className='block py-1 hover:text-rose-600 hover:pl-2'>Add your Restaurant</a>
                    </div>
                    <div>
                        <a href="" className='block py-1 hover:text-rose-600 hover:pl-2'>Get Help</a>
                        <a href="" className='block py-1 hover:text-rose-600 hover:pl-2'>Read FAQs</a>
                        <a href="" className='block py-1 hover:text-rose-600 hover:pl-2'>View all cities</a>
                        <a href="" className='block py-1 hover:text-rose-600 hover:pl-2'>Restaurants near me</a>
                    </div>
                    <div>
                        <div className='flex py-1'>
                            <DeviceMobileIcon className='w-4 mr-2 text-rose-600'/> <span>01025-200000</span>
                        </div>
                        <div className='flex py-1'>
                            <MailIcon className='w-4 mr-2 text-rose-600'/> <span>redorion@gmail.com</span>
                        </div>
                        <div className='flex py-1'>
                            <LocationMarkerIcon className='w-4 mr-2 text-rose-600'/> <span>Example Address #5000 <br />Example City</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 pt-16 text-sm opacity-4">
                    <div>
                        <a href="" className='text-slate-100/50'>CopyRight @ 2020 online food</a>
                    </div>
                    <div className='text-right'>
                        <a href="" className='px-3'>Privacy Policy</a>
                        <a href="" className='px-3'>Terms Use</a>
                        <a href="" className='px-3'>Pricing</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;