import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BuyService = () => {

    const navigate = useNavigate();

    return (
        <Row className='mt-5 pt-5 mx-auto'>
            <Col className='mx-auto shadow-lg px-4 pt-5' sm={12} md={8} lg={6}>
                <Form className='mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Address"
                            required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Phone number" required />
                    </Form.Group>
                    <Button
                        onClick={() => navigate('/checkout')}
                        name='login'
                        className='w-100 mx-auto mb-3'
                        variant="info"
                        type="submit">
                        Check Out
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default BuyService;