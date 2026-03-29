import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Lottie from 'lottie-react';
import noData from '../../../../assets/noData.json';
import { AuthContext } from '../../../../Context/AuthProvider';
import Spinner from '../../../Share/Spinner';
import { Link } from 'react-router-dom';

const MyProduct = () => {
    const { user } = useContext(AuthContext);

    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['MyProduct'],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_LOCALHOST}/products/${user?.email}`,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`,
                    },
                },
            );
            const data = await res.json();
            return data;
        },
    });

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success('Deleted successfully');
                    refetch();
                }
            });
    };

    const handleAdvertise = (id) => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/advertise/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ advertise: true }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    toast.success('Advertised successfully');
                    refetch();
                }
            })
            .catch((err) => console.error(err.message));
    };

    if (isLoading) {
        return <Spinner />;
    }

    if (!products?.length) {
        return (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <div className="mx-auto max-w-md">
                    <Lottie className="mx-auto" animationData={noData} loop />
                </div>
                <div className="mt-2 text-center">
                    <h2 className="text-2xl font-bold text-slate-900">No products yet</h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Start selling by adding your first refurbished laptop listing.
                    </p>
                    <Link
                        to="/dashboard/add-product"
                        className="mt-5 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
                        Add Product
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Seller Panel
                    </p>
                    <h2 className="text-2xl font-bold text-slate-900">My Products</h2>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                    {products.length} Items
                </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="table w-full text-sm">
                    <thead className="bg-slate-50 text-slate-700">
                        <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => (
                            <tr key={product._id} className="hover:bg-slate-50/70">
                                <th>{i + 1}</th>
                                <td className="font-semibold text-slate-800">{product.productName}</td>
                                <td>${product.price}</td>
                                <td>
                                    {product.status === 'available' ? (
                                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                                            Available
                                        </span>
                                    ) : (
                                        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                                            Sold
                                        </span>
                                    )}
                                </td>
                                <td>
                                    {product.advertise === true ? (
                                        <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">
                                            Advertised
                                        </span>
                                    ) : (
                                        <button
                                            onClick={() => handleAdvertise(product._id)}
                                            className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100">
                                            Advertise
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="rounded-md bg-rose-600 px-3 py-1 text-xs font-semibold text-white hover:bg-rose-500">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyProduct;
