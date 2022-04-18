import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../Images/logo.png'
import CustomLink from './CustomLink';
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { cartContext } from '../../../App';
import auth from '../../../firebase.init';
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';


const Header = () => {

    const addedServices = useContext(cartContext);
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <Navbar
            className='fixed-top'
            bg="light"
            expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home#home">
                    <img
                        height={30}
                        src={logo}
                        alt="" />
                    <span className='text-warning fw-bolder fst-italic ps-2'>FHOTOGHOR</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={CustomLink}
                            to="/home">Home</Nav.Link>
                        <Nav.Link
                            as={CustomLink}
                            to="/blog">Blog</Nav.Link>
                        <NavDropdown
                            title="Pages"
                            id="basic-nav-dropdown">
                            <NavDropdown.Item href="/home#photographar">Photographar</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/home#services">Services</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about">About me</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link
                            className='position-relative'
                            as={CustomLink}
                            to="/shopincart">
                            <p
                                className='pt-0 lh-1 bg-info text-white rounded-circle position-absolute p-1 ms-4 mb-4'>{addedServices.length}</p><ShoppingCartIcon height={30} /></Nav.Link>
                        {
                            !user?.uid ? <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                                :
                                <button className='bg-white border-0' onClick={handleLogout} >Logout</button>
                        }
                        <Nav.Link as={CustomLink} to="/register">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;