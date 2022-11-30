import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import noData from '../../../../assets/noData.json';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Share/Spinner';
import { AuthContext } from '../../../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const {
        data: bookings,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_LOCALHOST}/bookings/${user?.email}`,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem(
                            'accessToken',
                        )}`,
                    },
                },
            );
            const data = await res.json();
            return data;
        },
    });
    // console.log(bookings);
    if (isLoading) {
        return <Spinner />;
    }

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/bookings/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success('Delete successfully');
                    refetch();
                }
            });
    };

    return (
        <>
            {bookings?.length === 0 ? (
                <>
                    <div>
                        <div className="flex justify-center mb-8">
                            <div className="mt-5 h-1/2">
                                <Lottie
                                    className="mx-auto"
                                    animationData={noData}
                                    loop={true}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                to="/"
                                className="group relative mx-auto inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                href="/download">
                                <span className="absolute inset-0 border border-[#EC4F9D] group-active:border-[#EC4F9D]"></span>
                                <span className="block border border-[#EC4F9D] bg-[#EC4F9D] px-12 py-3 transition-transform active:[#EC4F9D] active:bg-[#EC4F9D] group-hover:-translate-x-1 group-hover:-translate-y-1">
                                    Add Product
                                </span>
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h3 className="text-3xl font-bold">MY Order</h3>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Seller Name</th>
                                    <th>Seller Email</th>
                                    <th>Delete</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.length && bookings?.map((booking, i) => (
                                    <tr key={booking._id}>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={
                                                            booking.productImage
                                                        }
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{booking.productName}</td>
                                        <td>{booking.price}tk</td>
                                        <td>{booking.sellerName}</td>
                                        <td>{booking.sellerEmail}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleDelete(booking._id)
                                                }
                                                className="btn btn-xs">
                                                Delete
                                            </button>
                                        </td>
                                        <td>
                                            {booking.price && !booking.paid && (
                                                <Link
                                                    to={`/dashboard/payment/${booking._id}`}>
                                                    <button className="btn btn-xs btn-primary">
                                                        Pay
                                                    </button>
                                                </Link>
                                            )}
                                            {booking.price && booking.paid && (
                                                <span className="text-primary">
                                                    Paid
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    );
};

export default MyOrder;