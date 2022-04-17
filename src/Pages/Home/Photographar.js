import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import photographar from '../../Images/photographar.jpg';
import facebook from '../../Images/icon/facebook.png';
import twetter from '../../Images/icon/twetter.png';
import linkedin from '../../Images/icon/linkedin.png';

const Photographar = () => {
    return (
        <Container id='photographar' className='mt-5'>
            <h3 className='text-center mb-3'>Photographar</h3>
            <div className='mt-5 shadow-lg'>
                <Row>
                    <Col sm={12} md={6}>
                        <img className='img-fluid' src={photographar} alt="" />
                    </Col>
                    <Col className='m-auto m-3 px-5 pt-3' sm={12} md={6}>
                        <h4>Mr.Mads</h4>
                        <h6>4.7 Ratings</h6>
                        <p>I'm a wildlife photographar. I did take many wildlife photos. And my popular albums is Dark Cheta, White Goat, Blue Dove, Red Fish etc.</p>
                        <p>Phone: +007 7778888888</p>
                        <h3 className='d-flex pe-3 pinter btn'><img className='pe-1' height={30} src={facebook} alt="" /> Facebook</h3>
                        <h3 className='d-flex pe-3 btn'><img className='pe-1' height={30} src={twetter} alt="" />Twitter</h3>
                        <h3 className='d-flex pe-3 btn'><img className='pe-1' height={30} src={linkedin} alt="" />Linkedin</h3>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Photographar;