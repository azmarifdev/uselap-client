import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/category`)
            .then((res) => res.json())
            .then((data) => {
                setCatagories(data);
            });
    }, []);
    // console.log(catagories);
    return (
        <div>
            <div className="py-7 text-center font-bold text-3xl mt-3 uppercase">
                <p>second hand product category</p>
                <hr className="mt-1 border-2" />
            </div>
            <div className="grid md:grid-cols-3 gap-y-7 md:gap-10 my-5 mx-auto">
                {catagories.map((category) => (
                    <>
                        <div className="mx-auto">
                            <div className="w-[300px]">
                                <div className="group relative block rounded-xl hover:shadow-2xl bg-black">
                                    <img
                                        alt="Developer"
                                        src={category.image}
                                        className="absolute inset-0 h-full w-full rounded-xl object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                    />

                                    <div className="relative p-8 flex justify-center ">
                                        <div className="mt-64">
                                            <div className="translate-y-8 hover:rounded-xl transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                                <p className="text-3xl absolute ml-8 text-white bottom-36 font-bold">
                                                    {category.category}
                                                </p>
                                                <Link
                                                    className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                                                    to={`/categories-data/${category?.category}`}>
                                                    <span className="block rounded-full bg-[#002B53] px-8 py-3 text-white text-sm font-medium hover:bg-transparent">
                                                        Shop Now
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Category;
