import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
// console.log(stripePromise);
const Payment = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Checkout</h1>
            <h1 className="text-xl  text-center font-bold">
                Price: $ {data.price}
            </h1>
            <div className="w-96 mt-20">
                <Elements stripe={stripePromise}>
                    <CheckoutForm paymentData={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
