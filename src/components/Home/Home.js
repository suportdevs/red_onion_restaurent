import React from 'react';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import Foods from '../Foods/Foods';
import WhyChoose from '../WhyChoose/WhyChoose';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Menu></Menu>
            <Header></Header>
            <Foods></Foods>
            <WhyChoose></WhyChoose>
            <Footer></Footer>
        </>
    );
};

export default Home;