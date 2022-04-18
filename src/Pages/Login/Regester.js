import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import facebook from '../../Images/icon/facebook.png';
import google from '../../Images/icon/google.png';
import logo from '../../Images/logo.png';
import Loading from '../Shared/Loading/Loading';

const Regester = () => {

    const [agree, setAgree] = useState(true);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confiarmPassword, setconfiarmPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let error3;
    if (password !== confiarmPassword) {
        error3 = 'password did not match!';
    }
    let errorElement;
    if (error || error1 || error2 || error3) {
        errorElement = <p className='text-danger'>{error1?.message} {error3} {error2?.message} {error?.message}</p>
    }
    if (loading || loading1 || loading2 || updating) {
        return <Loading></Loading>;
    }
    if (user || user1 || user2) {
        navigate(from, { replace: true });
    }

    return (
        <Row className='mt-5 pt-5 mx-auto'>
            <span className='mx-auto align-items-center justify-content-center text-center my-1'>
                <img height={50} width={50} src={logo} alt="" />
            </span>
            <Row className='mt-2 mx-auto'>
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
            <Row className='mx-auto my-3'>
                <Col className='mx-auto p-0 d-flex justify-content-center align-items-center' sm={12} md={8} lg={6}>
                    <div style={{ marginRight: '2px', borderBottom: '1px solid black', width: '50%' }}></div>
                    or
                    <div style={{ marginLeft: '2px', borderBottom: '1px solid black', width: '50%' }}></div>
                </Col>
            </Row>
            <Col className='mx-auto shadow-lg px-4 pt-5' sm={12} md={8} lg={6}>
                <Form onSubmit={() => updateProfile(displayName)} className='mx-auto'>
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
                    {
                        errorElement
                    }
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