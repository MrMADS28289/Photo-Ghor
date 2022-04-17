import { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { cartContext } from '../../App';
import CartDetails from './CartDetails';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';


const Cart = () => {

    const addedServices = useContext(cartContext);

    return (
        <Container className='mt-5 mx-auto'>
            {
                addedServices.length ?
                    addedServices.map(service => <CartDetails
                        key={service.id}
                        service={service}
                    ></CartDetails>)
                    :
                    <h1 className='mt-5 pt-5 text-info text-center'>Please select a service</h1>
            }
            <Button style={{ display: addedServices.length ? '' : 'none' }} className='w-100 mt-2' variant="primary">Proced Check Out <ArrowCircleRightIcon height={20} /></Button>
        </Container>
    );
};

export default Cart;