import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Container id='services' className='mt-5'>
            <h3 className='text-center my-3'>Servises</h3>
            <Row className='mx-auto'>
                {
                    services.map(service => <Service
                        key={service}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;