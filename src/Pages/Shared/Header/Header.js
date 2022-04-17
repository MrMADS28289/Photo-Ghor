import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../Images/logo.png'
import CustomLink from './CustomLink';
import { ShoppingCartIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <Navbar
            className='fixed-top'
            bg="light"
            expand="lg">
            <Container>
                <Navbar.Brand href="#home">
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
                            to="/about">About</Nav.Link>
                        <NavDropdown
                            title="Pages"
                            id="basic-nav-dropdown">
                            <NavDropdown.Item href="/home#photographar">Photographar</NavDropdown.Item>
                            <NavDropdown.Item href="/home#services">Services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={CustomLink} to="/shopincart"><ShoppingCartIcon height={25} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;