import React, { useContext } from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { Button, Row } from 'react-bootstrap';
import { cartContext } from '../../App';
import CartDetails from './CartDetails';

const CheckOut = () => {

    const addedServices = useContext(cartContext);

    return (
        <div className='m-5 p-5'>
            <h3 className='text-center'>please check out!</h3>
            <Row className='mt-5 pt-5'>
                {
                    addedServices.map(service => <CartDetails
                        key={service.id}
                        service={service}
                    ></CartDetails>)
                }
            </Row>
            <Button
                className='mt-2 mx-auto'
                variant="primary">Check Out <ArrowCircleRightIcon height={20} /></Button>
        </div>
    );
};

export default CheckOut;