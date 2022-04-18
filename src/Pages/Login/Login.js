import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import facebook from '../../Images/icon/facebook.png';
import google from '../../Images/icon/google.png';
import logo from '../../Images/logo.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [signInWithEmailAndPassword, user3, loading3, error3,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error || error1 || error2 || error3) {
        errorElement = <p className='text-danger'>{error3?.message} {error1?.message} {error2?.message} {error?.message}</p>
    }
    if (loading || loading1 || loading3 || sending) {
        return <p>Loading...</p>;
    }
    if (user || user1 || user3) {
        navigate(from, { replace: true });
    }

    return (
        <Row className='mt-5 pt-5 mx-auto'>
            <span className='mx-auto align-items-center justify-content-center text-center my-1'>
                <img height={50} width={50} src={logo} alt="" />
            </span>
            <Row className='mt-5 mx-auto'>
                <Col className='mx-auto p-0' sm={12} md={8} lg={6}>
                    <Button onClick={() => signInWithGoogle()} className='w-100 mx-auto mb-3 border shadow-lg' variant="white" type="submit">
                        <img className='me-3' height={30} src={google} alt="" />
                        Login with Google
                    </Button>
                    <Button onClick={() => signInWithFacebook()} className='w-100 mx-auto mb-3' variant="primary" type="submit">
                        <img className='me-3' height={30} src={facebook} alt="" />
                        Login with Facebook
                    </Button>
                </Col>
            </Row>
            <Col className='mx-auto shadow-lg px-4 pt-5' sm={12} md={8} lg={6}>
                <Form className='mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        errorElement
                    }
                    <Button
                        onClick={async () => {
                            await sendPasswordResetEmail(email);
                            toast('Email Sent.')
                        }}
                        className='bg-white border-0 text-primary' >Forgot password?</Button>
                    <ToastContainer />
                    <Button
                        name='login'
                        className='w-100 mx-auto my-3'
                        variant="info" type="submit"
                        onClick={() => signInWithEmailAndPassword(email, password)}>
                        Login
                    </Button>

                    <p className='d-flex align-items-center justify-content-center my-4'>Don’t have an account? <button onClick={() => navigate('/register')} className='nav-link border-0 bg-white'>Sign up</button></p>
                </Form>
            </Col>
        </Row>
    );
};

export default Login;