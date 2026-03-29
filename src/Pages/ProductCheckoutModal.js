import React, { useContext, useEffect, useState } from 'react';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const cardOptions = {
    style: {
        base: {
            fontSize: '16px',
            color: '#1f2937',
            '::placeholder': {
                color: '#9ca3af',
            },
        },
        invalid: {
            color: '#dc2626',
        },
    },
};

const ProductCheckoutForm = ({ product, onClose, onPaymentSuccess }) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();

    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState(product?.location || '');
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${accessToken}`,
            },
            body: JSON.stringify({ price: Number(product?.price || 0) }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data?.clientSecret || ''))
            .catch(() => {
                setError('Could not initialize payment. Please try again.');
            });
    }, [accessToken, product?.price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!phone.trim() || !location.trim()) {
            setError('Please provide phone and location.');
            return;
        }

        if (!stripe || !elements || !clientSecret) {
            setError('Stripe is not ready yet. Please wait a moment.');
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            setError('Card input not found.');
            return;
        }

        setProcessing(true);
        let bookingId = null;
        let paymentConfirmed = false;

        try {
            const bookingPayload = {
                name: user?.displayName || user?.email,
                email: user?.email,
                sellerEmail: product?.email,
                sellerName: product?.name,
                productImage: product?.productImage,
                phone: phone.trim(),
                productId: product?._id,
                location: location.trim(),
                price: Number(product?.price || 0),
                productName: product?.productName,
            };

            const bookingRes = await fetch(`${process.env.REACT_APP_LOCALHOST}/bookings`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${accessToken}`,
                },
                body: JSON.stringify(bookingPayload),
            });
            const bookingData = await bookingRes.json();
            bookingId = bookingData?.insertedId;

            if (!bookingId) {
                throw new Error('Could not create booking. Please try again.');
            }

            const { error: paymentMethodError } = await stripe.createPaymentMethod({
                type: 'card',
                card,
            });

            if (paymentMethodError) {
                throw new Error(paymentMethodError.message || 'Card validation failed.');
            }

            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                    billing_details: {
                        name: user?.displayName || user?.email,
                        email: user?.email,
                    },
                },
            });

            if (confirmError) {
                throw new Error(confirmError.message || 'Payment failed.');
            }

            if (!paymentIntent || paymentIntent.status !== 'succeeded') {
                throw new Error('Payment was not completed. Please try again.');
            }
            paymentConfirmed = true;

            const paymentPayload = {
                price: Number(product?.price || 0),
                email: user?.email,
                name: user?.displayName || user?.email,
                productId: product?._id,
                transitionId: paymentIntent.id,
                bookingId,
            };

            const paymentRes = await fetch(`${process.env.REACT_APP_LOCALHOST}/payments`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${accessToken}`,
                },
                body: JSON.stringify(paymentPayload),
            });
            const paymentData = await paymentRes.json();

            if (!paymentData?.acknowledged) {
                throw new Error('Payment saved failed. Please contact support.');
            }

            setTransactionId(paymentIntent.id);
            toast.success('Payment successful! Product purchased.');
            onPaymentSuccess(paymentIntent.id);
        } catch (submitError) {
            setError(submitError.message || 'Payment failed. Please try again.');

            if (bookingId && !paymentConfirmed) {
                await fetch(`${process.env.REACT_APP_LOCALHOST}/bookings/${bookingId}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${accessToken}`,
                    },
                });
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/65 px-4 py-8">
            <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl md:p-7">
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Checkout</h2>
                        <p className="mt-1 text-sm text-slate-500">Pay securely with Stripe to complete your order.</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-600 hover:bg-slate-100">
                        Close
                    </button>
                </div>

                <div className="mb-5 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Product</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">{product?.productName}</p>
                    <p className="mt-1 text-sm text-slate-600">Seller: {product?.name}</p>
                    <p className="mt-2 text-xl font-extrabold text-slate-900">$ {product?.price}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="block text-sm font-semibold text-slate-700">
                            Phone Number
                            <input
                                type="text"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                placeholder="Your phone number"
                                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500"
                            />
                        </label>

                        <label className="block text-sm font-semibold text-slate-700">
                            Delivery Location
                            <input
                                type="text"
                                value={location}
                                onChange={(event) => setLocation(event.target.value)}
                                placeholder="Your location"
                                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-500"
                            />
                        </label>
                    </div>

                    <div className="rounded-lg border border-slate-300 p-3">
                        <CardElement options={cardOptions} />
                    </div>

                    {error && <p className="text-sm font-medium text-red-600">{error}</p>}
                    {transactionId && (
                        <p className="text-sm font-medium text-emerald-600">Transaction ID: {transactionId}</p>
                    )}

                    <div className="flex flex-wrap gap-3">
                        <button
                            type="submit"
                            disabled={processing || !stripe || !clientSecret}
                            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300">
                            {processing ? 'Processing...' : 'Pay & Confirm Order'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ProductCheckoutModal = ({ product, onClose, onPaymentSuccess }) => {
    return (
        <Elements stripe={stripePromise}>
            <ProductCheckoutForm
                product={product}
                onClose={onClose}
                onPaymentSuccess={onPaymentSuccess}
            />
        </Elements>
    );
};

export default ProductCheckoutModal;
