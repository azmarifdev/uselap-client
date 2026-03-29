import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import ProductCheckoutModal from './ProductCheckoutModal';

const ProductView = () => {
    const loadedProduct = useLoaderData();
    const [product, setProduct] = useState(loadedProduct);
    const [showCheckout, setShowCheckout] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const isSold = product?.status === 'sold';

    const handleBuyNow = () => {
        if (!user?.email) {
            navigate('/login', { state: { from: location } });
            return;
        }
        setShowCheckout(true);
    };

    const handlePaymentSuccess = (transactionId) => {
        setProduct((prev) => ({
            ...prev,
            status: 'sold',
            transitionId: transactionId,
        }));
        setShowCheckout(false);
    };

    return (
        <main className="page-shell py-10">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                        <img
                            src={product?.productImage}
                            alt={product?.productName}
                            className="h-full min-h-[280px] w-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                            {product?.category}
                        </p>
                        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                            {product?.productName}
                        </h1>
                        <p className="mt-4 text-2xl font-extrabold text-slate-900">
                            $ {product?.price}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2 text-xs">
                            <span
                                className={`rounded-full px-3 py-1 font-semibold ${
                                    isSold
                                        ? 'bg-amber-100 text-amber-700'
                                        : 'bg-emerald-100 text-emerald-700'
                                }`}>
                                {isSold ? 'Sold' : 'Available'}
                            </span>
                            {product?.condition && (
                                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                                    {product.condition}
                                </span>
                            )}
                        </div>

                        <div className="mt-5 space-y-2 text-sm text-slate-600">
                            <p>
                                <span className="font-semibold text-slate-800">Seller:</span>{' '}
                                {product?.name}
                            </p>
                            <p>
                                <span className="font-semibold text-slate-800">Location:</span>{' '}
                                {product?.location || 'Not specified'}
                            </p>
                            <p>
                                <span className="font-semibold text-slate-800">Phone:</span>{' '}
                                {product?.phone || 'Not specified'}
                            </p>
                            <p>
                                <span className="font-semibold text-slate-800">Years of use:</span>{' '}
                                {product?.yearOfUses || 'N/A'}
                            </p>
                        </div>

                        {product?.description && (
                            <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
                                {product.description}
                            </p>
                        )}

                        <div className="mt-8 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={handleBuyNow}
                                disabled={isSold}
                                className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300">
                                {isSold ? 'Already Sold' : 'Buy Now'}
                            </button>
                            <Link
                                to="/products"
                                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                                Back to Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {showCheckout && (
                <ProductCheckoutModal
                    product={product}
                    onClose={() => setShowCheckout(false)}
                    onPaymentSuccess={handlePaymentSuccess}
                />
            )}
        </main>
    );
};

export default ProductView;
