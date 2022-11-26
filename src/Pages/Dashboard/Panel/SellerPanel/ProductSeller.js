import React from 'react';

const ProductSeller = ({ product }) => {
    const {
        category,
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
        time,
        useTime,
    } = product;

    return (
        <>
            <div class="flex justify-between m-6 border shadow-2xl">
                <div class="flex flex-col h-full max-w-lg mx-auto bg-gray-900  ">
                    <img
                        class=""
                        src={productImage}
                        alt=""
                    />
                    <div class="flex justify-between -mt-4 px-4">
                        <span class="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5">
                            {category}
                        </span>
                        <span class="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium">
                            
                            <p class="text-blue-500 font-semibold text-xs">
                                {quality}
                            </p>
                        </span>
                    </div>
                    <div class="py-2 px-4">
                        <h3 class="block mt-2 text-xl font-semibold text-purple-800 transition-colors duration-300 transform dark:text-white hover:text-purple-600 ">
                            {productName}
                        </h3>

                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-base">
                                Resale Price :{' '}
                            </span>
                            ${price}
                        </p>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-base">Orginal Price : </span>$
                            {purchase}
                        </p>

                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-base">Location : </span>
                            {location}
                        </p>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-base">Used Time :</span>{' '}
                            {useTime}
                        </p>

                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-base">Purchase Date : </span>
                            {purchaseYear}
                        </p>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-base">sell date : </span>
                            {date}
                        </p>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-base">Sell Time : </span>
                            {time}
                        </p>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-base">Phone Number : </span>
                            {phone}
                        </p>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-base">Description :</span>{' '}
                            {textarea.length > 150
                                ? textarea.slice(0, 150) + '.....'
                                : textarea}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductSeller;
