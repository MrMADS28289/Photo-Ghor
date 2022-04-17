import React from 'react';
import Banner from './Banner';
import BestAlbum from './BestAlbum';
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
            <BestAlbum />
        </>
    );
};

export default Home;