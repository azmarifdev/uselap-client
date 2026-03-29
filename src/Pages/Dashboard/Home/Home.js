import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const featured = [
    {
        title: 'Business Class Ready',
        subtitle: 'ThinkPad X1 / Latitude Series',
        price: 'From $680',
    },
    {
        title: 'Creator Performance',
        subtitle: 'MacBook Pro / XPS Lineup',
        price: 'From $990',
    },
    {
        title: 'Student Essentials',
        subtitle: 'Lightweight + Long Battery',
        price: 'From $420',
    },
];

const processSteps = [
    { title: 'Browse', text: 'Filter by brand, condition, and budget.' },
    { title: 'Book', text: 'Reserve instantly from trusted sellers.' },
    { title: 'Pay Securely', text: 'Complete checkout with Stripe security.' },
];

const brands = ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer'];

const Home = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/advertise`)
            .then((res) => res.json())
            .then((data) => setAdvertisedProducts(data || []))
            .catch(() => setAdvertisedProducts([]));
    }, []);

    useEffect(() => {
        const loadAllProducts = async () => {
            setLoadingProducts(true);
            try {
                const res = await fetch(`${process.env.REACT_APP_LOCALHOST}/products-public`);
                const data = await res.json();
                setAllProducts(data || []);
            } catch (error) {
                setAllProducts([]);
            } finally {
                setLoadingProducts(false);
            }
        };

        loadAllProducts();
    }, []);

    const hasAdvertisement = useMemo(
        () => advertisedProducts && advertisedProducts.length > 0,
        [advertisedProducts],
    );

    return (
        <main className="page-shell py-10 space-y-10">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
                <p className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                    Certified Refurbished Laptops
                </p>
                <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div>
                        <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                            Premium Devices, Smarter Price
                        </h1>
                        <p className="mt-5 max-w-xl text-sm leading-8 text-slate-600 md:text-base">
                            Buy confidently from verified sellers and sell faster with role-based dashboard tools.
                            Each listing is transparent, practical, and performance-focused.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/dashboard"
                                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700">
                                Explore Dashboard
                            </Link>
                            <Link
                                to="/blog"
                                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50">
                                Learn Before You Buy
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-3xl font-bold text-slate-900">500+</p>
                            <p className="mt-2 text-sm text-slate-600">Active listings</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-3xl font-bold text-slate-900">4.8/5</p>
                            <p className="mt-2 text-sm text-slate-600">Buyer rating</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-3xl font-bold text-slate-900">48h</p>
                            <p className="mt-2 text-sm text-slate-600">Avg. deal time</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <p className="text-3xl font-bold text-slate-900">100%</p>
                            <p className="mt-2 text-sm text-slate-600">Role-based workflow</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Live Inventory</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">All Products</h2>
                    </div>
                    <Link
                        to="/products"
                        className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:bg-slate-50">
                        View Dedicated Page
                    </Link>
                </div>

                {loadingProducts ? (
                    <p className="mt-5 text-sm text-slate-500">Loading products...</p>
                ) : allProducts.length === 0 ? (
                    <p className="mt-5 text-sm text-slate-500">No products available right now.</p>
                ) : (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {allProducts.map((product) => (
                            <article
                                key={product._id}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-md">
                                <img
                                    src={product.productImage}
                                    alt={product.productName}
                                    className="h-44 w-full object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                                        {product.category}
                                    </p>
                                    <h3 className="mt-2 line-clamp-2 text-base font-bold text-slate-900">
                                        {product.productName}
                                    </h3>
                                    <p className="mt-2 text-sm font-semibold text-slate-800">$ {product.price}</p>
                                    <p className="mt-1 text-xs text-slate-500">{product.location}</p>
                                    <Link
                                        to={`/products/${product._id}`}
                                        className="mt-3 inline-block text-xs font-semibold text-slate-700 underline underline-offset-2">
                                        View & Buy
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Promoted</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">Advertisement Section</h2>
                    </div>
                </div>

                {!hasAdvertisement ? (
                    <p className="mt-5 text-sm text-slate-500">No active advertised products right now.</p>
                ) : (
                    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {advertisedProducts.slice(0, 6).map((item) => (
                            <article
                                key={item._id}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                                <img
                                    src={item.productImage}
                                    alt={item.productName}
                                    className="h-40 w-full rounded-xl object-cover"
                                />
                                <div className="mt-3 px-1 pb-1">
                                    <h3 className="text-base font-bold text-slate-900">{item.productName}</h3>
                                    <p className="mt-1 text-sm text-slate-600">{item.category}</p>
                                    <p className="mt-2 text-sm font-semibold text-slate-800">$ {item.price}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <section className="grid gap-4 md:grid-cols-3">
                {featured.map((item) => (
                    <article
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Featured</p>
                        <h3 className="mt-2 text-xl font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">{item.subtitle}</p>
                        <p className="mt-5 inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-800">
                            {item.price}
                        </p>
                    </article>
                ))}
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Why UseLap</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">One Marketplace for Buyers and Sellers</h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                            Buyers compare real condition and fair prices. Sellers publish devices quickly and reach
                            targeted customers. Admin tools keep the platform safe and trusted.
                        </p>
                    </div>
                    <Link
                        to="/login"
                        className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-700">
                        Start Now
                    </Link>
                </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">How It Works</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {processSteps.map((step, index) => (
                        <article key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <p className="text-sm font-bold text-slate-500">Step {index + 1}</p>
                            <h3 className="mt-2 text-xl font-bold text-slate-900">{step.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Top Brands You Can Find</h2>
                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                    {brands.map((brand) => (
                        <div
                            key={brand}
                            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-6 text-center text-sm font-bold text-slate-700">
                            {brand}
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Role-Based Experience</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <article className="rounded-2xl border border-slate-200 p-5">
                        <h3 className="text-xl font-bold text-slate-900">Buyer</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">Book products, track orders, and pay securely.</p>
                    </article>
                    <article className="rounded-2xl border border-slate-200 p-5">
                        <h3 className="text-xl font-bold text-slate-900">Seller</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">Add products, advertise listings, and manage availability.</p>
                    </article>
                    <article className="rounded-2xl border border-slate-200 p-5">
                        <h3 className="text-xl font-bold text-slate-900">Admin</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">Moderate users, products, and reported items in one panel.</p>
                    </article>
                </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Customer Voices</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <p className="text-sm leading-7 text-slate-600">
                            "Got my laptop exactly as described. Price was fair and delivery was smooth."
                        </p>
                        <p className="mt-3 text-sm font-bold text-slate-800">- Rahim, Buyer</p>
                    </article>
                    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <p className="text-sm leading-7 text-slate-600">
                            "Listing products was simple, and I received qualified buyer requests quickly."
                        </p>
                        <p className="mt-3 text-sm font-bold text-slate-800">- Karim, Seller</p>
                    </article>
                </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">FAQ Snapshot</h2>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                    <p>• All advertised devices are refurbished and warranty-supported by sellers.</p>
                    <p>• Payments are processed using secure Stripe checkout flow.</p>
                    <p>• Buyers and sellers get different dashboard permissions based on roles.</p>
                </div>
            </section>
        </main>
    );
};

export default Home;
