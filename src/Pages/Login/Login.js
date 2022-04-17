import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import facebook from '../../Images/icon/facebook.png';
import google from '../../Images/icon/google.png';

const Login = () => {

    const [agree, setAgree] = useState(true);

    return (
        <Row className='mt-5 pt-5 mx-auto'>
            <h3 className='text-center my-3'>Please Login</h3>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="I agree the terms & condition" />
                    </Form.Group>
                    <Button disabled={agree} name='login' className='w-100 mx-auto mb-3' variant="primary" type="submit">
                        Login
                    </Button>
                    <Button className='w-100 mx-auto mb-3 shadow-lg' variant="dark" type="submit">
                        <img className='me-3' height={30} src={google} alt="" />
                        Login with Google
                    </Button>
                    <Button className='w-100 mx-auto mb-3' variant="dark" type="submit">
                        <img className='me-3' height={30} src={facebook} alt="" />
                        Login with Facebook
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default Login;