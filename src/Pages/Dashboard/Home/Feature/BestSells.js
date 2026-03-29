import React from 'react';

const featuredProducts = [
    {
        name: 'Dell XPS 13',
        price: '$1,245',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80',
        tag: 'Creator Favorite',
    },
    {
        name: 'MSI GF63 Thin',
        price: '$1,065',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80',
        tag: 'Gaming Pick',
    },
    {
        name: 'Lenovo IdeaPad',
        price: '$1,550',
        image: 'https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?auto=format&fit=crop&w=900&q=80',
        tag: 'Power User',
    },
    {
        name: 'Asus VivoBook',
        price: '$1,650',
        image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=900&q=80',
        tag: 'Student Choice',
    },
];

const BestSells = () => {
    return (
        <section className="page-shell mt-12">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 md:p-8">
                <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <p className="brand-chip inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                            Handpicked
                        </p>
                        <h2 className="soft-title mt-3">Top Refurbished Picks This Week</h2>
                    </div>
                    <p className="text-sm text-slate-600">
                        Curated models with strong resale value and reliable performance.
                    </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {featuredProducts.map((item) => (
                        <article
                            key={item.name}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                            <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
                            <div className="p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                                    {item.tag}
                                </p>
                                <h3 className="mt-2 text-lg font-bold text-slate-900">{item.name}</h3>
                                <p className="mt-2 text-sm font-semibold text-slate-700">From {item.price}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSells;
