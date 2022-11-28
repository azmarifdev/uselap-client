import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Advertise = () => {
    const [bookingData, setBookingData] = useState({});

    const { data: advertised = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_LOCALHOST}/advertise`,
            );
            const data = res.json();
            return data;
        },
    });

    const handleAdsData = (e) => {
        setBookingData(e);
    };
    console.log(advertised);

    return (
        <div>
            <div className="py-7 text-center font-bold text-4xl uppercase">
                <p>second hand product category</p>
                <hr className="mt-1 border-2" />
            </div>
            <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
                {advertised?.map((advertise) => (
                    <>
                        <img
                            className="h-56 w-56 aspect-video rounded-sm object-cover object-center bg-gray-500"
                            src={advertise.productImage}
                            alt=""
                        />
                        <div className="pr-3 leading-8">
                            <h1 className="text-2xl font-semibold">
                                {advertise.category}
                            </h1>
                            <h1 className="font-bold">
                                {advertise.productName}
                            </h1>
                            <h1 className="font-semibold">
                                Price: ${advertise.price}
                            </h1>
                            <h1 className="font-semibold">
                                {advertise.location}
                            </h1>
                            <h1 className="font-semibold">{advertise.name}</h1>
                            <h1 className="font-semibold">{advertise.email}</h1>
                            <div>
                                <label 
                                    htmlFor="booking-modal"
                                    onClick={() => handleAdsData(advertise)}
                                    className="btn mt-2 btn-outline btn-sm">
                                    Book Now
                                </label>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Advertise;
