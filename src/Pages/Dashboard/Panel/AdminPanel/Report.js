import { useQuery } from '@tanstack/react-query';
import Lottie from 'lottie-react';
import noData from '../../../../assets/noData.json';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../Share/Spinner';

const Report = () => {
    const {
        data: reportedItem,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['reportItem'],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_LOCALHOST}/report-item?report=true`,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem(
                            'accessToken',
                        )}`,
                    },
                },
            );
            const data = res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Spinner />;
    }
    // console.log(reportedItem);

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/reportItem/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                toast.success('Delete successfully');
                refetch();
            });
    };

    return (
        <>
            {reportedItem?.length === 0 ? (
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
                                </tr>
                            </thead>
                            <tbody>
                                {reportedItem.length &&
                                    reportedItem?.map((reported, i) => (
                                        <tr key={reported._id}>
                                            <th>{i + 1}</th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img
                                                            src={
                                                                reported.productImage
                                                            }
                                                            alt="Avatar Tailwind CSS Component"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{reported.productName}</td>
                                            <td>{reported.price}tk</td>
                                            <td>{reported.name}</td>
                                            <td>{reported.email}</td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            reported._id,
                                                        )
                                                    }
                                                    className="btn btn-xs">
                                                    Delete
                                                </button>
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

export default Report;
