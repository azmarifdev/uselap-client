import React, { useContext } from 'react';
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
            );
            const data = await res.json();
            return data;
        },
    });
    console.log(bookings);
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
                console.log(data);
                toast.success('Delete successfully');
                refetch();
            });
    };

    return (
        <div>
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
                        {bookings?.map((booking, i) => (
                            <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={booking.productImage}
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
        </div>
    );
};

export default MyOrder;
