import React from 'react';
import { Carousel } from 'react-bootstrap';
import zebra from '../../Images/zebra.jpg';
import zerab from '../../Images/zerab.jpg';
import elephent from '../../Images/elephant.jpg';

const Banner = () => {
    return (
        <div id='home'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        height={600}
                        className="d-block w-100"
                        src={zebra}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Wildlife Photographar.</h3>
                        <p>Zebra the most beautiful animal
                            Zebras are the herd animals and they are largely found in the continent of Africa. The white and black strips on their body looks very beautiful. The most common species of zebras found in Africa is "Burch ell's Zebra.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={600}
                        className="d-block w-100"
                        src={zerab}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Wildlife Photographar.</h3>
                        <p>The giraffe is a tall African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth.Zebras are the herd animals and they are largely found in the continent of Africa. The white and black strips on their body looks very beautiful. The most common species of zebras found in Africa is "Burch ell's Zebra.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={600}
                        className="d-block w-100"
                        src={elephent}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Wildlife Photographar.</h3>
                        <p>Elephant are highly intelligent animals with complex emotions, feelings, compassion and self-awareness (elephants are one of very few species to recognize themselves in a mirror!). The gestation period of an elephant is 22 months. That's almost 2 years, the longest pregnancy of any mammal!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;