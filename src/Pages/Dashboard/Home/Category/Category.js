import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_LOCALHOST}/category`)
            .then((res) => setCategories(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="page-shell mt-12">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <p className="brand-chip inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                        Browse Inventory
                    </p>
                    <h2 className="soft-title mt-3">Shop By Laptop Category</h2>
                </div>
                <p className="text-sm text-slate-600">Compare condition, price, and seller profile before booking.</p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {categories.map((category) => (
                    <article key={category._id || category.category} className="group relative overflow-hidden rounded-2xl">
                        <img
                            src={category.image}
                            alt={category.category}
                            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-5">
                            <p className="text-2xl font-bold text-white">{category.category}</p>
                            <Link
                                to={`/categories-data/${category?.category}`}
                                className="mt-3 inline-block rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900 transition hover:bg-amber-300">
                                Explore Deals
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Category;
