import React, {  } from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Store from '../Store/Store';
import WhyChoose from '../WhyChoose/WhyChoose';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Menu></Menu>
            <Header></Header>
            <Store></Store>
            <WhyChoose></WhyChoose>
            <Footer></Footer>
        </>
    );
};

export default Home;