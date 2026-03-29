import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Advertise = () => {
    const { data: advertised = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_LOCALHOST}/advertise`);
            const data = await res.json();
            return data;
        },
    });

    if (!advertised?.length) {
        return null;
    }

    return (
        <section className="page-shell mt-12">
            <div className="flex items-end justify-between gap-3">
                <div>
                    <p className="brand-chip inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                        Seller Spotlight
                    </p>
                    <h2 className="soft-title mt-3">Featured Advertised Laptops</h2>
                </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {advertised.map((item) => (
                    <article key={item._id} className="glass-card overflow-hidden rounded-2xl">
                        <img
                            className="h-48 w-full object-cover"
                            src={item.productImage}
                            alt={item.productName}
                        />
                        <div className="p-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                                {item.category}
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-slate-900">{item.productName}</h3>
                            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-600">
                                <p>
                                    Price: <span className="font-semibold text-slate-900">${item.price}</span>
                                </p>
                                <p>
                                    City: <span className="font-semibold text-slate-900">{item.location}</span>
                                </p>
                            </div>
                            <p className="mt-3 truncate text-sm text-slate-500">Seller: {item.email}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Advertise;
