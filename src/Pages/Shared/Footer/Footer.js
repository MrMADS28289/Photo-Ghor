import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facebook from '../../../Images/icon/facebook.png';
import google from '../../../Images/icon/google.png';
import twetter from '../../../Images/icon/twetter.png';
import linkedin from '../../../Images/icon/linkedin.png';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className='text-white p-5 mt-5' style={{ backgroundColor: '#171716' }}>
            <div className='d-flex justify-content-center mb-5'>
                <h3 className='d-flex pe-3'><img className='pe-1' height={30} src={facebook} alt="" /> Facebook</h3>
                <h3 className='d-flex pe-3'><img className='pe-1' height={30} src={twetter} alt="" />Twitter</h3>
                <h3 className='d-flex pe-3'><img className='pe-1' height={30} src={google} alt="" />Google</h3>
                <h3 className='d-flex pe-3'><img className='pe-1' height={30} src={linkedin} alt="" />Linkedin</h3>
            </div>
            <div className='d-flex justify-content-center'>
                <h6>Copyright &copy; Photoghor {year}. All Right Reserved.</h6>
            </div>
        </footer>
    );
};

export default Footer;