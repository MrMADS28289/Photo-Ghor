import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const Service = ({ service, handleAddToCart2 }) => {

    const { img, name, price, title, id } = service;
    const navigate = useNavigate();
    const handleServiceNavigate = (id) => {
        navigate(`/service/${id}`)
    }

    return (
        <Col className='mb-4' sm={12} md={6} lg={4}>
            <Card className='shadow-lg mx-auto border-0' style={{ width: '18rem', height: '450px' }}>
                <Card.Img variant="top" height={200} src={img} />
                <Card.Body className=' pb-0'>
                    <Card.Title>{name}</Card.Title>
                    <h6>$ {price}</h6>
                    <Card.Text>{title}</Card.Text>
                    <Button onClick={() => handleAddToCart2(service)} className='mt-2 w-100' variant="warning">
                        Add to cart
                        <ShoppingCartIcon height={20} />
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;