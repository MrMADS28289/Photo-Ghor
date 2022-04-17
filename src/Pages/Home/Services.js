import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service';

const Services = ({ handleAddToCart }) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleAddToCart2 = (props) => {
        handleAddToCart(props)
    }

    return (
        <Container
            id='services'
            className='mt-5'>
            <h3 className='text-center my-3'>Servises</h3>
            <Row className='mx-auto'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        handleAddToCart2={handleAddToCart2}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;