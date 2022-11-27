import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../../Share/Spinner';

const AllProduct = () => {
    const {
        data: allProducts,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_LOCALHOST}/allProducts`,
            );
            const data = res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Spinner />;
    }

    // console.log(allProducts);
    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/allProducts/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                toast.success('delete successfully');
                refetch();
            });
    };
    return (
        <div>
            <div>
                <h3 className="text-3xl font-bold">All Product</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Seller Name</th>
                                <th>Seller Email</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts?.map((product, i) => (
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.name}</td>
                                    <td>{product.email}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDelete(product._id)
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

export default AllProduct;
