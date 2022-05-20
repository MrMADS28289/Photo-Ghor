import React from 'react';
import facebook from '../../../Images/icon/facebook.png';
import google from '../../../Images/icon/google.png';
import twetter from '../../../Images/icon/twetter.png';
import linkedin from '../../../Images/icon/linkedin.png';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className='text-white p-5' style={{ backgroundColor: '#171716', marginTop: '800px' }}>
            <div className='d-flex justify-content-center mb-5'>
                <h3 className='d-flex pe-3 ms-2'>
                    <img
                        className='pe-1'
                        height={40}
                        src={facebook}
                        alt="" /></h3>
                <h3 className='d-flex pe-3'>
                    <img
                        className='pe-1'
                        height={40}
                        src={twetter}
                        alt="" /></h3>
                <h3 className='d-flex pe-3'>
                    <img
                        className='pe-1'
                        height={40}
                        src={google}
                        alt="" /></h3>
                <h3 className='d-flex pe-3'>
                    <img
                        className='pe-1'
                        height={40}
                        src={linkedin}
                        alt="" /></h3>
            </div>
            <div className='text-center'>
                <h4>Created with <svg height={30} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg> by Mr.Mads</h4>
                <h6>Copyright &copy; Photoghor {year}. All Right Reserved.</h6>
            </div>
        </footer>
    );
};

export default Footer;