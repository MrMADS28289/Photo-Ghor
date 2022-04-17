import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import facebook from '../../Images/icon/facebook.png';
import google from '../../Images/icon/google.png';
import logo from '../../Images/logo.png';

const Regester = () => {

    const [agree, setAgree] = useState(true);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confiarmPassword, setconfiarmPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    if (error) {
        console.log(error)
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        // updateProfile({ displayName })
        console.log(user)
    }

    return (
        <Row className='mt-5 pt-5 mx-auto'>
            <span className='mx-auto align-items-center justify-content-center text-center my-1'>
                <img height={50} width={50} src={logo} alt="" />
            </span>
            <Row className='mt-2 mx-auto'>
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
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="displayName"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfiarmPassword">
                        <Form.Label>Confairm Password</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={(e) => setconfiarmPassword(e.target.value)}
                            placeholder="Confairm Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="I agree the terms & condition" />
                    </Form.Group>
                    <Button
                        disabled={agree}
                        name='login'
                        className='w-100 mx-auto mb-3'
                        variant="info"
                        type="submit"
                        onClick={() => createUserWithEmailAndPassword(email, password)}>
                        Sign up
                    </Button>
                </Form>
                <p className='d-flex align-items-center justify-content-center my-4'>Already have an account? <button onClick={() => navigate('/login')} className='nav-link border-0 bg-white'>Login</button></p>
            </Col>
        </Row>
    );
};

export default Regester;