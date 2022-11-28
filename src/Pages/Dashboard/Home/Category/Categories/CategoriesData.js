import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import CategoriesCard from './CategoriesCard';
import Lottie from 'lottie-react';
import noData from '../../../../../assets/noData.json';

const CategoriesData = () =>
{
    const products = useLoaderData();
    // console.log(products);
    const [bookingData, setBookingData] = useState(null);

    // console.log(bookingData);

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
                    </div>
                </>
            ) : (
                <>
                    <div className="">
                        <div className="grid grid-cols-1 my-20 md:mt-20 md:grid-cols-3 mx-10 gap-8 ">
                            {products.map((product) => (
                                <CategoriesCard
                                    product={product}
                                    setBookingData={setBookingData}
                                    key={product._id}
                                />
                            ))}
                        </div>
                        <section>
                            {bookingData && (
                                <BookingModal
                                    bookingData={bookingData}
                                    setBookingData={
                                        setBookingData
                                    }></BookingModal>
                            )}
                        </section>
                    </div>
                </>
            )}
        </>
    );
};

export default CategoriesData;
