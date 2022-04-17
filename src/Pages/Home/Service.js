import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { img, name, price, title } = service;
    return (
        <Col className='mb-4' sm={12} md={6} lg={4}>
            <Card className='shadow-lg mx-auto border-0' style={{ width: '18rem', height: '450px' }}>
                <Card.Img variant="top" height={200} src={img} />
                <Card.Body className=' pb-0'>
                    <Card.Title>{name}</Card.Title>
                    <h6>$ {price}</h6>
                    <Card.Text>{title}</Card.Text>
                    <Button className='w-100 mt-2' variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;