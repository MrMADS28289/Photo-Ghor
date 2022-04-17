import React from 'react';

const CartDetails = ({ service }) => {

    const { img, name, price, title } = service;

    return (
        <div className='d-flex align-items-center justify-content-center shadow-lg m-4'>
            <div className='w-75 d-flex align-items-center justify-content-center'>
                <img height={60} src={img} alt="" />
                <div className='ms-2 p-3'>
                    <h5>{name}</h5>
                    <h6>$ {price}</h6>
                    <p>{title.slice(0, 40)}...</p>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;