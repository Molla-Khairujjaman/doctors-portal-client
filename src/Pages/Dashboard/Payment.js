import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../Loading/Loading';

const stripePromise = loadStripe('pk_test_51MypPDFvGTQxqWfs37HvdhIkw1YTsyYlgH6QM9o6bDaPNbPelAFIwdDdNBkjQbKMBbBsNpFTwo7Ll2Zy7kmauErD00pm91ZxGw');
console.log(stripePromise);


const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation()
    console.log('Booking Data', booking);
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl">Payment for - {booking.treatment} </h3>
            <p className='text-xl font-bold'>Total: ${booking.price}</p>
            <div className=' w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                    booking = {booking}
                    
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;

