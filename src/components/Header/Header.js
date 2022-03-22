import React from 'react';
import banner from '../../images/bannerbackground.png';

const Header = () => {
    return (
        <main>
            <div className="bg-cover bg-no-repeat bg-center w-full " style={{ backgroundImage: `url(${banner})` }}>
                <div className="w-10/12 mx-auto justify-center text-center py-24 md:py-20 lg:py-44">
                    <h1 className='text-3xl sm:text-4xl font-bold'>Best food waiting for your Belly</h1>
                    <div className='mt-4'>
                        <form>
                            <input type="text" class="mt-1 px-5 w-52 overflow-hidden sm:w-96 py-2 bg-white borderborder-slate-300 rounded-full text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 " placeholder='Search food items'/>
                            <button className='rounded-full bg-rose-600 z-10 px-5 py-2.5 text-sm text-white -ml-16'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Header;