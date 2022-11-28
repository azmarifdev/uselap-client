import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthProvider';

const CategoriesCard = ({ product, setBookingData }) => {
    const {
        date,
        email,
        location,
        name,
        phone,
        photo,
        price,
        productImage,
        productName,
        purchase,
        purchaseYear,
        quality,
        textarea,
        useTime,
    } = product;
    // console.log(product);

    const handleReport = (id) => {
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
    };

    return (
        <>
            <div className="max-w-2xl overflow-hidden border-2 bg-white rounded-lg shadow-2xl">
                <img
                    className="object-cover w-full h-64"
                    src={productImage}
                    alt=""
                />
                <hr className="mt-3" />

                <div className="p-6">
                    <div>
                        <p
                            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform"
                            role="link">
                            {productName}
                        </p>
                        <p className="mt-2 text-sm text-gray-800">
                            <span className="text-base">Sell Price: </span>$
                            {price}
                        </p>
                        <p className="mt-2 text-sm text-gray-800">
                            <span className="text-base">Original Price: </span>$
                            {purchase}
                        </p>

                        <p className="mt-2 text-sm text-gray-800">
                            <span className="text-base">Location: </span>
                            {location}
                        </p>
                        <p className="mt-2 text-sm text-gray-800">
                            <span className="text-base">Used Time:</span>{' '}
                            {useTime}
                        </p>

                        <p className="mt-2 text-sm text-gray-800">
                            <span className="text-base">Purchase Date: </span>
                            {purchaseYear}
                        </p>
                        <p className="mt-2 text-sm text-gray-800">
                            <span className="text-base">Quality: </span>
                            {quality}
                        </p>
                        <p className="mt-2 text-sm text-gray-800">
                            <span className="text-base">Seller Number: </span>
                            {phone}
                        </p>
                        <p className="mt-2 text-sm text-gray-800">
                            <span className="text-base">Seller Email: </span>
                            {email}
                        </p>
                        <p className="mt-2 text-sm text-gray-800">
                            <span className="text-base">Description:</span>{' '}
                            {textarea.length > 150
                                ? textarea.slice(0, 150) + '.....'
                                : textarea}
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img
                                    className="object-cover h-10 rounded-full"
                                    src={photo}
                                    alt=""
                                />
                                <Link
                                    to=""
                                    className="mx-2 font-semibold text-gray-700 "
                                    role="link">
                                    {name}
                                </Link>
                            </div>
                            <span className="mx-1 text-xs text-gray-600">
                                {date}
                            </span>
                        </div>
                    </div>
                    <div className="flex mt-4 justify-between">
                        <div>
                            <label
                                onClick={() => handleReport(product._id)}
                                className="btn btn-outline btn-sm">
                                Report
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor="booking-modal"
                                onClick={() => setBookingData(product)}
                                className="btn btn-outline btn-sm">
                                Book Now
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoriesCard;
