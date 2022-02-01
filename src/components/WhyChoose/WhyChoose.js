import React from 'react';
import chooseUs1 from '../../images/adult-blur-blurred-background-687824.png';
import chooseUs2 from '../../images/architecture-building-city-2047397.png';
import chooseUs3 from '../../images/chef-cook-food-33614.png';
import icon1 from './icons/icon1.png';
import icon2 from './icons/icon2.png';
import icon3 from './icons/icon3.png';

const WhyChoose = () => {
    return (
        <div className='w-10/12 mx-auto mt-16'>
            <div className="text-center justify-center">
                <h2 className="text-2xl mb-5">Why Choose Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cum corporis temporibus <br /> ducimus possimus distinctio explicabo quaerat totam sequi inventore?</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-3">
                <div className='max-h-max rounded-md hover:shadow-2xl'>
                    <div className="overflow-hidden rounded-md">
                        <img src={chooseUs1} alt="" />
                    </div>
                    <div className="grid grid-cols-5 gap-1 p-4">
                        <div>
                            <img src={icon1} alt="" />
                        </div>
                        <div className='col-span-4'>
                            <h3 className="text-xl font-medium">Lorem, ipsum dolor.</h3>
                            <p className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error enim aut eum? Voluptate, ullam.</p>
                            <button className="text-rose-600 text-md hover:font-bold">See More</button>
                        </div>
                    </div>
                </div>
                <div className='max-h-max rounded-md hover:shadow-2xl'>
                    <div className="overflow-hidden rounded-md">
                        <img src={chooseUs3} alt="" />
                    </div>
                    <div className="grid grid-cols-5 gap-1 p-4">
                        <div>
                            <img src={icon3} alt="" />
                        </div>
                        <div className='col-span-4'>
                            <h3 className="text-xl font-medium">Lorem, ipsum dolor.</h3>
                            <p className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error enim aut eum? Voluptate, ullam.</p>
                            <button className="text-rose-600 text-md hover:font-bold">See More</button>
                        </div>
                    </div>
                </div>
                <div className='max-h-max rounded-md hover:shadow-2xl'>
                    <div className="overflow-hidden rounded-2xl">
                        <img src={chooseUs2} alt="" />
                    </div>
                    <div className="grid grid-cols-5 gap-1 p-4">
                        <div>
                            <img src={icon2} alt="" />
                        </div>
                        <div className='col-span-4'>
                            <h3 className="text-xl font-medium">Lorem, ipsum dolor.</h3>
                            <p className='text-sm my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error enim aut eum? Voluptate, ullam.</p>
                            <button className="text-rose-600 text-md hover:font-bold">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;