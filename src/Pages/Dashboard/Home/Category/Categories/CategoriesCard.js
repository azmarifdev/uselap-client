import { sendSignInLinkToEmail } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthProvider';

const CategoriesCard = ({ product, setBookingData }) => {
    const { user } = useContext(AuthContext);
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

    return (
        <>
            <div class="max-w-2xl overflow-hidden border-2 bg-white rounded-lg shadow-2xl">
                <img
                    class="object-cover w-full h-64"
                    src={productImage}
                    alt=""
                />
                <hr className="mt-3" />

                <div class="p-6">
                    <div>
                        <p
                            class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform"
                            role="link">
                            {productName}
                        </p>
                        <p class="mt-2 text-sm text-gray-800">
                            <span className="text-base">Sell Price: </span>$
                            {price}
                        </p>
                        <p class="mt-2 text-sm text-gray-800">
                            <span className="text-base">Original Price: </span>$
                            {purchase}
                        </p>

                        <p class="mt-2 text-sm text-gray-800">
                            <span className="text-base">Location: </span>
                            {location}
                        </p>
                        <p class="mt-2 text-sm text-gray-800">
                            <span className="text-base">Used Time:</span>{' '}
                            {useTime}
                        </p>

                        <p class="mt-2 text-sm text-gray-800">
                            <span className="text-base">Purchase Date: </span>
                            {purchaseYear}
                        </p>
                        <p class="mt-2 text-sm text-gray-800">
                            <span className="text-base">Quality: </span>
                            {quality}
                        </p>
                        <p class="mt-2 text-sm text-gray-800">
                            <span className="text-base">Seller Number: </span>
                            {phone}
                        </p>
                        <p class="mt-2 text-sm text-gray-800">
                            <span className="text-base">Seller Email: </span>
                            {email}
                        </p>
                        <p class="mt-2 text-sm text-gray-800">
                            <span className="text-base">Description:</span>{' '}
                            {textarea.length > 150
                                ? textarea.slice(0, 150) + '.....'
                                : textarea}
                        </p>
                    </div>
                    <div class="mt-4">
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <img
                                    class="object-cover h-10 rounded-full"
                                    src={photo}
                                    alt=""
                                />
                                <Link
                                    to=""
                                    class="mx-2 font-semibold text-gray-700 "
                                    role="link">
                                    {name}
                                </Link>
                            </div>
                            <span class="mx-1 text-xs text-gray-600">
                                {date}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <Link
                                to=""
                                class="group relative mt-5 inline-block overflow-hidden border border-gray-800 px-5 focus:outline-none focus:ring">
                                <span class="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                                <span class="relative text-sm font-medium text-gray-800 transition-colors group-hover:text-white">
                                    Add To WishList
                                </span>
                            </Link>
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
