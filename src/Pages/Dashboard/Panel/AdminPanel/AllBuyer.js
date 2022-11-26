import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Spinner from '../../../Share/Spinner';

const AllBuyer = () => {
    const {
        data: buyers,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['MyBuyer'],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_LOCALHOST}/buyers`,
            );
            const data = res.json();
            return data;
        },
    });
    console.log(buyers);

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/buyers/${id}`, {
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

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <div>
                <h3 className="text-3xl font-bold">All Buyer</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Buyer Name</th>
                                <th>Buyer Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buyers?.map((buyer, i) => (
                                <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDelete(buyer._id)
                                            }
                                            className="btn btn-xs btn-accent">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyer;
