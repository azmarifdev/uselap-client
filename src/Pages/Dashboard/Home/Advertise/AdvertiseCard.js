import React from 'react';
import toast from 'react-hot-toast';

const AdvertiseCard = ({ advertise }) => {
    // console.log(advertise);
    const {
        productImage,
        productName,
        price,
        purchase,
        textarea,
        purchaseYear,
        location,
        time,
        date,
        name,
        photo,
        _id,
        useTime,
    } = advertise;
    const handleReported = (id) =>
    {
        fetch(`${process.env.REACT_APP_LOCALHOST}/report-item/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    // console.log(data);
                    toast.success('Reported Successfully');
                } else {
                    toast.error(data.message);
                }
            });
    }
    const handleAdBooking = () =>
    {
        
    }
    return (
        <div className="my-10 border shadow-2xl rounded-lg">
            <div className="max-w-2xl overflow-hidden bg-white shadow-xl rounded-lg">
                <img
                    className="object-cover w-full h-72 border"
                    src={productImage}
                    alt="Article"
                />

                <div className="p-6">
                    <div>
                        <h3 className="block mt-2 text-xl font-semibold text-purple-800 transition-colors duration-300 transform  hover:text-gray-600 ">
                            {productName}
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                            <span className="text-base text-gray-700">
                                Resale Price :{' '}
                            </span>
                            ${price}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                            <span className="text-base">Orginal Price : </span>$
                            {purchase}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                            <span className="text-base">Description :</span>{' '}
                            {textarea.length > 150
                                ? textarea.slice(0, 150) + '...'
                                : textarea}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                            <span className="text-base">Location : </span>
                            {location}
                        </p>
                        <p className="mt-2 text-sm text-gray-600">
                            <span className="text-base">Used Time :</span>{' '}
                            {useTime}
                        </p>

                        <p className="mt-2 text-sm text-gray-600">
                            <span className="text-base">Purchase Date : </span>
                            {purchaseYear}
                        </p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img
                                    className="object-cover h-10 w-10 rounded-full"
                                    src={photo}
                                    alt=""
                                />
                                <p className="mx-2 font-semibold text-gray-700">
                                    {name}
                                </p>
                            </div>
                            <span className="mx-1 text-xs text-gray-600">
                                {date} and Time : {time}
                            </span>
                        </div>
                        <div className="flex justify-end items-end">
                            <button
                                onClick={() => handleReported(_id)}
                                className="btn btn-secondary btn-sm mr-4">
                                Report to Admin
                            </button>
                            <label
                                htmlFor="buy-now-modal"
                                onClick={() => handleAdBooking(advertise)}
                                className="inline-block text-center rounded-md  bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500">
                                Buy Now
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;
