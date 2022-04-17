import React from 'react';
import { Col } from 'react-bootstrap';

const CartDetails = ({ service }) => {

    const { img, name, price, title } = service;

    return (
        <Col
            className='mb-4'
            sm={12}
            md={6}
            lg={4}>
            <div
                className='d-flex align-items-center justify-content-center shadow-lg m-4'>
                <div
                    className='w-75 p-3 align-items-center justify-content-center'>
                    <img
                        className='img-fluid'
                        src={img}
                        alt="" />
                    <div className='ms-2 p-3'>
                        <h5>{name}</h5>
                        <h6>$ {price}</h6>
                        <p>{title.slice(0, 40)}...</p>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default CartDetails;