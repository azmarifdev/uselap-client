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
            );
            const data = res.json();
            return data;
        },
    });
    // console.log(products);

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/products/${id}`, {
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

    if (isLoading) {
        return <Spinner />;
    }

    const handleAdvertise = (id) => {
        // console.log(id);

        // axios.patch(`http://localhost:7000/advertise/${id}`, {
        //     advertise: true
        // })
        //     .then(res => console.log(res))
        // .catch(err => console.log(err))

        fetch(`${process.env.REACT_APP_LOCALHOST}/advertise/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                advertise: true,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.modifiedCount) {
                    toast.success('Advertise successfully');
                }
            })
            .catch((err) => console.error(err.message));
    };

    return (
        <>
            {products?.length === 0 ? (
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
                                to="/dashboard/add-product"
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
                    <div>
                        <h3 className="text-3xl font-bold">MY Order</h3>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Advertise</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products?.map((product, i) => (
                                        <tr key={product._id}>
                                            <th>{i + 1}</th>
                                            <td>{product.productName}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            handleAdvertise(
                                                                product?._id,
                                                            )
                                                        }
                                                        className="btn btn-xs btn-primary">
                                                        Advertise
                                                    </button>
                                                </>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            product._id,
                                                        )
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
                </>
            )}
        </>
    );
};

export default MyProduct;
