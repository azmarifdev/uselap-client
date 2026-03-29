import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAllProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `${process.env.REACT_APP_LOCALHOST}/products-public`,
                );
                const data = await res.json();
                setProducts(data || []);
            } catch (error) {
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        loadAllProducts();
    }, []);

    const countText = useMemo(() => {
        if (loading) return 'Loading products...';
        return `${products.length} products available`;
    }, [loading, products.length]);

    return (
        <main className="page-shell py-10">
            <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                            Marketplace
                        </p>
                        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                            All Products
                        </h1>
                        <p className="mt-2 text-sm text-slate-600">{countText}</p>
                    </div>
                    <Link
                        to="/"
                        className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 hover:bg-slate-50">
                        Back to Home
                    </Link>
                </div>

                {loading ? (
                    <p className="mt-8 text-sm text-slate-500">Please wait, fetching products...</p>
                ) : products.length === 0 ? (
                    <p className="mt-8 text-sm text-slate-500">No products found right now.</p>
                ) : (
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <article
                                key={product._id}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-md">
                                <img
                                    src={product.productImage}
                                    alt={product.productName}
                                    className="h-44 w-full object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                                        {product.category}
                                    </p>
                                    <h2 className="mt-2 line-clamp-2 text-base font-bold text-slate-900">
                                        {product.productName}
                                    </h2>
                                    <p className="mt-2 text-sm font-semibold text-slate-800">$ {product.price}</p>
                                    <p className="mt-1 text-xs text-slate-500">{product.location}</p>
                                    <p className="mt-2 text-xs">
                                        <span
                                            className={`rounded-full px-2 py-1 font-semibold ${
                                                product.status === 'sold'
                                                    ? 'bg-amber-100 text-amber-700'
                                                    : 'bg-emerald-100 text-emerald-700'
                                            }`}>
                                            {product.status === 'sold'
                                                ? 'Sold'
                                                : 'Available'}
                                        </span>
                                    </p>
                                    <p className="mt-3 text-xs text-slate-500">Seller: {product.name}</p>
                                    <Link
                                        to={`/products/${product._id}`}
                                        className="mt-4 inline-block rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-800">
                                        View & Buy
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default Products;
