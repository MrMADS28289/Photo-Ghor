import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../Images/photostudio-8-designify.png'

const About = () => {
    return (
        <div className='mt-5 pt-5'>
            <Container id='photographar' className='mt-5'>
                <h3 className='text-center mb-3'>About me</h3>
                <div className='mt-5 shadow-lg'>
                    <Row>
                        <Col sm={12} md={6}>
                            <img className='img-fluid' src={image} alt="" />
                        </Col>
                        <Col className='m-auto m-3 px-5 pt-3' sm={12} md={6}>
                            <h4>Me = Md Abduss Sobhan</h4>
                            <p>I'm 18, I live at Jhenaidah in Khulna. And i am a Student and part time tailer master. And i wanna be a fullstack webdeveloper. That's why i am doing work very hard, Sometimes daily 16h and sometime 18-19h. I wish i will get a job in few month's.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;