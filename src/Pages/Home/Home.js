import React from 'react';
import Banner from './Banner';
import Photographar from './Photographar';
import Services from './Services';

const Home = ({ handleAddToCart3 }) => {

    const handleAddToCart = (props) => {
        handleAddToCart3(props)
    }

    return (
        <>
            <Banner />
            <Photographar />
            <Services handleAddToCart={handleAddToCart} />
            <h1>best album</h1>
        </>
    );
};

export default Home;