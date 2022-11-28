import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthProvider';
import BookingModal from './BookingModal';
import CategoriesCard from './CategoriesCard';

const CategoriesData = () =>
{
    const products = useLoaderData();
    // console.log(products);
    const [bookingData, setBookingData] = useState(null);

    // console.log(bookingData);

    return (
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
                        setBookingData={setBookingData}></BookingModal>
                )}
            </section>
        </div>
    );
};

export default CategoriesData;
