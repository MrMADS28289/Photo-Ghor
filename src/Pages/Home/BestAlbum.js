import React from 'react';
import img from '../../Images/elephant.jpg';
import img1 from '../../Images/zebra.jpg';
import img2 from '../../Images/zerab.jpg';
import img3 from '../../Images/servises-photo/bird.jpg';
import img4 from '../../Images/servises-photo/cat.jpg';
import img5 from '../../Images/servises-photo/dog.jpg';
import img6 from '../../Images/servises-photo/fish.jpg';
import img7 from '../../Images/servises-photo/lion.jpg';
import img8 from '../../Images/servises-photo/snake.jpg';
import { Col, Container, Row } from 'react-bootstrap';


const BestAlbum = () => {
    return (
        <Container>
            <h3 className='text-center my-3'>Best Album</h3>
            <Row className='p-5 shadow-lg'>
                <Col sm={12} md={6} lg={4}>
                    <img className='img-fluid m-2 ' src={img} alt="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <img className='img-fluid m-2 ' src={img1} alt="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <img className='img-fluid m-2 ' src={img2} alt="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <img className='img-fluid m-2 ' src={img3} alt="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <img className='img-fluid m-2 ' src={img4} alt="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <img className='img-fluid m-2 ' src={img5} alt="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <img className='img-fluid m-2 ' src={img6} alt="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <img className='img-fluid m-2 ' src={img7} alt="" />
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <img className='img-fluid m-2 ' src={img8} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default BestAlbum;