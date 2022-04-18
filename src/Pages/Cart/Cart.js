import { useContext } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { cartContext } from '../../App';
import CartDetails from './CartDetails';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const addedServices = useContext(cartContext);
    const navigate = useNavigate();

    return (
        <Container className='mt-5 mx-auto'>
            <Row className='mt-5 pt-5'>
                {
                    addedServices.length ?
                        addedServices.map(service => <CartDetails
                            key={service.id}
                            service={service}
                        ></CartDetails>)
                        :
                        <h1 className='mt-5 pt-5 text-info text-center'>Please select a service</h1>
                }
            </Row>
            <Button
                style={{ display: addedServices.length ? '' : 'none' }}
                className='w-100 mt-2'
                variant="primary"
                onClick={() => navigate('/checkout')}
            >Buy Service <ArrowCircleRightIcon height={20} />
            </Button>
        </Container>
    );
};

export default Cart;