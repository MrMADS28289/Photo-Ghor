import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import facebook from '../../Images/icon/facebook.png';
import google from '../../Images/icon/google.png';
import logo from '../../Images/logo.png'

const Login = () => {

    const navigate = useNavigate();

    return (
        <Row className='mt-5 pt-5 mx-auto'>
            <span className='mx-auto align-items-center justify-content-center text-center my-1'>
                <img height={50} width={50} src={logo} alt="" />
            </span>
            <Row className='mt-5 mx-auto'>
                <Col className='mx-auto p-0' sm={12} md={8} lg={6}>
                    <Button className='w-100 mx-auto mb-3 border shadow-lg' variant="white" type="submit">
                        <img className='me-3' height={30} src={google} alt="" />
                        Login with Google
                    </Button>
                    <Button className='w-100 mx-auto mb-3' variant="primary" type="submit">
                        <img className='me-3' height={30} src={facebook} alt="" />
                        Login with Facebook
                    </Button>
                </Col>
            </Row>
            <Col className='mx-auto shadow-lg px-4 pt-5' sm={12} md={8} lg={6}>
                <Form className='mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <a className='text-decoration-none' href="#ls">Forgot password?</a>
                    <Button name='login' className='w-100 mx-auto my-3' variant="info" type="submit">
                        Login
                    </Button>

                    <p className='d-flex align-items-center justify-content-center my-4'>Don’t have an account? <button onClick={() => navigate('/register')} className='nav-link border-0 bg-white'>Sign up</button></p>
                </Form>
            </Col>
        </Row>
    );
};

export default Login;