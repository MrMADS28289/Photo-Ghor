import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../useService/useService';
import Service from './Service';

const Services = ({ handleAddToCart }) => {

    const [services] = useService();

    const handleAddToCart2 = (props) => {
        handleAddToCart(props)
    }

    return (
        <Container id='services' className='mt-5'>
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